import {
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
  VERIFICATION_EMAIL_TEMPLATE,
} from "./emailTemplates.js";
import { mailtrapClient, sender } from "./mailtrap.config.js";

// * Send verification email :
export const sendVerificationEmail = async (email, verificationToken) => {
  const recipient = [{ email }];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Verify your email address",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationToken
      ),
      category: "Email Verification",
    });
    console.log("Email sent successfully!", response);
  } catch (error) {
    console.error("Failed to send verification email :", error);
    throw new Error(`Failed to send verification email : ${error}`);
  }
};

// * Send welcome email :
export const sendWelcomeEmail = async (email, name) => {
  const recipient = [{ email }];
  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      template_uuid: "2544c303-5dac-4eba-82ec-bb6278e9dfc6",
      template_variables: {
        company_info_name: "Advance MERN Auth Company",
        name: name,
      },
    });
    console.log("Welcome email sent successfully!", response);
  } catch (error) {
    console.error("Failed to send welcome email :", error);
    throw new Error(`Failed to send welcome email : ${error}`);
  }
};

// * Send reset password email :
export const sendResetPasswordEmail = async (email, resetURL) => {
  const recipient = [{ email }];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Reset your password",
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
      category: "Reset Password",
    });
  } catch (error) {
    console.log("Failed to send reset password email :", error);
    throw new Error(`Failed to send reset password email : ${error}`);
  }
};

// * Send Reset Successful Email :
export const sendResetSuccessEmail = async (email, name) => {
  const recipient = [{ email }];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Password reset successful",
      html: PASSWORD_RESET_SUCCESS_TEMPLATE,
      category: "Password Reset",
    });

    console.log(response);
  } catch (error) {
    console.log("Failed to send reset success email :", error);
    throw new Error(`Failed to send reset success email : ${error}`);
  }
};
