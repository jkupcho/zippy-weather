import React from "react";
import { Formik, useField } from "formik";
import { Button, Text, TextInput, View } from "react-native";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { addFavorite } from "./favoritesSlice";

const zipCodeValidationSchema = yup.object().shape({
  zipCode: yup.string().required().length(5),
});

export interface ZipFormShape {
  zipCode: string;
}

export function FormikTextInput({
  placeholder,
  name,
  onBlur,
  onChangeText,
  value,
}: {
  placeholder: string;
  name: string;
  id: string;
  [key: string]: any;
}) {
  const [_, meta] = useField(name);
  return (
    <>
      <TextInput
        onBlur={onBlur}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
      />
      {meta.touched && meta.error ? (
        <Text key={meta.error}>{meta.error}</Text>
      ) : null}
    </>
  );
}

export function ZipForm() {
  const dispatch = useDispatch();

  function handleOnSubmit(values: ZipFormShape) {
    dispatch(addFavorite(values.zipCode));
  }

  return (
    <>
      <Text>Enter a Zip Code</Text>
      <Formik
        initialValues={{ zipCode: "" }}
        validationSchema={zipCodeValidationSchema}
        onSubmit={handleOnSubmit}
      >
        {({ handleSubmit, handleBlur, handleChange, values }) => (
          <View>
            <FormikTextInput
              placeholder="Zip Code"
              id="zipCode"
              name="zipCode"
              onBlur={handleBlur("zipCode")}
              onChangeText={handleChange("zipCode")}
              value={values.zipCode}
            />
            {/* this handleSubmit as any is a hack to workaround a function signature difference for React Native
                https://github.com/formium/formik/issues/376/#issuecomment-466964585 */}
            <Button title="Add Zip" onPress={handleSubmit as any} />
          </View>
        )}
      </Formik>
    </>
  );
}
