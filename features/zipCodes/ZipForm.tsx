import React from "react";
import { Formik, useField } from "formik";
import { StyleSheet, View } from "react-native";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { addFavorite } from "./zipCodesSlice";
import { Dialog, Portal, TextInput, Button } from "react-native-paper";

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
    <TextInput
      onBlur={onBlur}
      onChangeText={onChangeText}
      value={value}
      placeholder={placeholder}
      error={meta.error !== undefined}
    />
  );
}

export function ZipFormDialog({
  visible,
  hideDialog,
}: {
  visible: boolean;
  hideDialog: () => void;
}) {
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.Title>Enter Zip Code</Dialog.Title>
        <Dialog.Content>
          <ZipForm hideDialog={hideDialog} />
        </Dialog.Content>
      </Dialog>
    </Portal>
  );
}

export function ZipForm({ hideDialog }: { hideDialog: () => void }) {
  const dispatch = useDispatch();

  function handleOnSubmit(values: ZipFormShape) {
    dispatch(addFavorite(values.zipCode));
    hideDialog();
  }

  return (
    <View>
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
            <Button onPress={handleSubmit as any} mode="contained">
              Add Zip
            </Button>
          </View>
        )}
      </Formik>
    </View>
  );
}
