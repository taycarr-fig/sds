import { useState } from "react";
import { useMediaQuery } from "hooks";
import {
  Button,
  InputField,
  CheckboxField,
  Link,
  Text,
  TextContentHeading,
} from "primitives";
import { Flex, FlexItem, Section } from "layout";

// these URLs are taken directly from the Figma export and are only meant
// for use while the MCP server is running.  They give you a quick way to
// prototype with the same image assets you see in the design tool.
const googleLogo =
  "http://localhost:3845/assets/6a132dfcece7b7c6af5cf896571c678e44017604.svg";
const passkeyLogo =
  "http://localhost:3845/assets/8127dc1fb1bb8c57160996cc023eed474c42b9f2.svg";

export function SignIn() {
  const { isMobile } = useMediaQuery();
  const sectionPadding = isMobile ? "600" : "1600";
  const flexGap = isMobile ? "600" : "800";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const isFormValid = email.trim().length > 0 && password.trim().length > 0;

  return (
    <Section padding={sectionPadding} variant="neutral">
      <Flex
        container
        direction="column"
        alignPrimary="center"
        alignSecondary="center"
        gap={flexGap}
      >
        <FlexItem size="major">
          <Flex direction="column" gap={flexGap} alignSecondary="stretch">
            {/* header text */}
            <TextContentHeading heading="Sign in to your account" />

            {/* form itself */}
            <Flex direction="column" gap="600" alignSecondary="stretch">
              <InputField
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                isRequired
              />

              <Flex direction="column" gap="400">
                <Flex justifyContent="space-between" alignItems="center">
                  {/* visually hidden label for accessibility; InputField already
                      renders a label, but we want the "forgot password" link on
                      the same row so we keep the input label off-screen. */}
                  <span className="sr-only">Password</span>
                  <Link href="#">Forgot your password?</Link>
                </Flex>
                <InputField
                  label="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  isRequired
                />
              </Flex>

              <CheckboxField
                isSelected={remember}
                onChange={() => setRemember((r) => !r)}
                label="Remember me on this device"
              />

              <Button
                variant="primary"
                isDisabled={!isFormValid}
                onPress={() => {
                  /* handle login */
                }}
              >
                Login
              </Button>
            </Flex>

            {/* divider */}
            <Flex align="center" gap="400">
              <div
                style={{
                  flex: 1,
                  height: 1,
                  backgroundColor: "var(--sds-color-text-subtle-default)",
                }}
              />
              <Text size="200" className="text-uppercase" color="subtle">
                or
              </Text>
              <div
                style={{
                  flex: 1,
                  height: 1,
                  backgroundColor: "var(--sds-color-text-subtle-default)",
                }}
              />
            </Flex>

            {/* social / alternative sign‑in options */}
            <Flex direction="column" gap="400" alignSecondary="stretch">
              <Button variant="neutral">
                <Flex align="center" gap="200">
                  <img src={googleLogo} alt="" width={18} height={18} />
                  <span>Sign in with Google</span>
                </Flex>
              </Button>
              <Button variant="neutral">
                <Flex align="center" gap="200">
                  <img src={passkeyLogo} alt="" width={18} height={18} />
                  <span>Sign in with passkey</span>
                </Flex>
              </Button>
              <Button variant="neutral">Sign in with SSO</Button>
            </Flex>

            <Text align="center">
              New to Stripe? <Link href="#">Create account</Link>
            </Text>
          </Flex>
        </FlexItem>
      </Flex>
    </Section>
  );
}
