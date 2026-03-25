import { useMediaQuery } from "hooks";
import { Flex, Section } from "layout";
import { ReferralForm } from "compositions";

export function ReferralFormExample() {
  const { isMobile } = useMediaQuery();
  const sectionPadding = isMobile ? "600" : "1600";

  return (
    <Section padding={sectionPadding} variant="stroke">
      <Flex container direction="column" alignSecondary="center">
        <ReferralForm
          onSubmit={(data) => {
            // placeholder: in a real app you would send data to an API
            // console.log("Referral submitted:", data);
          }}
        />
      </Flex>
    </Section>
  );
}

export default ReferralFormExample;
