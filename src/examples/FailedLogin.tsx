import { useMediaQuery } from "hooks";
import { IconAlertCircle } from "icons";
import { Flex, FlexItem, Section } from "layout";
import {
  Button,
  InputField,
  Link,
  Notification,
  Text,
  TextContentHeading,
} from "primitives";
import { useState } from "react";

export function FailedLogin() {
  const { isMobile } = useMediaQuery();
  const sectionPadding = isMobile ? "600" : "1600";
  const flexGap = isMobile ? "400" : "800";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showNotification, setShowNotification] = useState(true);

  const handleSignIn = () => {
    // Simulate a sign-in attempt; if credentials are invalid show the notification
    setShowNotification(true);
  };

  return (
    <Section padding={sectionPadding} variant="neutral">
      <Flex container direction="column" alignSecondary="center" gap={flexGap}>
        <FlexItem size="major">
          <Flex direction="column" gap={flexGap} alignSecondary="stretch">
            {/* Error Notification */}
            {showNotification && (
              <Notification
                variant="alert"
                icon={<IconAlertCircle />}
                isDismissible
                onDismiss={() => setShowNotification(false)}
              >
                <Flex direction="column" gap="200">
                  <Text>
                    <strong>Login failed</strong>
                  </Text>
                  <Text>
                    The email or password you entered is incorrect. Please try
                    again.
                  </Text>
                </Flex>
              </Notification>
            )}

            {/* Form Header */}
            <TextContentHeading
              heading="Sign in to your account"
              subheading="Enter your credentials to access your dashboard"
            />

            {/* Login Form */}
            <Flex direction="column" gap="600" alignSecondary="stretch">
              <InputField
                label="Email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                isRequired
              />

              <InputField
                label="Password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                isRequired
              />

              <Flex direction="column" gap="400" alignSecondary="stretch">
                <Button
                  variant="primary"
                  isDisabled={!email.trim() || !password.trim()}
                  onPress={handleSignIn}
                >
                  Sign in
                </Button>

                <Flex justifyContent="center">
                  <Link href="#">Forgot password?</Link>
                </Flex>
              </Flex>
            </Flex>

            {/* Additional Help */}
            <Text align="center">
              Don't have an account?{" "}
              <Link href="#">Create one now</Link>
            </Text>
          </Flex>
        </FlexItem>
      </Flex>
    </Section>
  );
}
