import { LangKeys } from "@constants/lang";
import Joi from "joi";
import { useIntl } from "react-intl";
import { MIN_PASSWORD_CHARS } from "./_constants";

const getPasswordRegex = () => {
  return RegExp(
    `^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{${MIN_PASSWORD_CHARS},})`,
    "i"
  );
};

export const useAccountSecurityFormSchema = () => {
  const { formatMessage } = useIntl();

  return Joi.object({
    password: Joi.string()
      .required()
      .regex(
        getPasswordRegex(),
        formatMessage(
          {
            id: LangKeys.AccountSecurityFieldPasswordFormatMsg,
            defaultMessage: `contain atleast ${MIN_PASSWORD_CHARS} characters, one uppercase, one lowercase and one number`,
          },
          {
            minChars: MIN_PASSWORD_CHARS,
          }
        )
      )
      .label(
        formatMessage({
          id: LangKeys.AccountSecurityFieldPassword,
          defaultMessage: "Password",
        })
      ),
    confirmPassword: Joi.string()
      .valid(Joi.ref("password"))
      .required()
      .options({
        messages: {
          "any.only": formatMessage({
            id: LangKeys.AccountSecurityFieldRepeatPasswordMatchMsg,
            defaultMessage: "Password confirmation doesn't match Password.",
          }),
        },
      }),
    currentPassword: Joi.string()
      .required()
      .label(
        formatMessage({
          id: LangKeys.AccountSecurityFieldCurrentPassword,
          defaultMessage: "Current password",
        })
      ),
  });
};
