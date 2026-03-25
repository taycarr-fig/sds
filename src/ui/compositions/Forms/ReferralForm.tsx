import React, { useState } from "react";
import { FormBox } from "compositions";
import { Flex } from "layout";
import {
  InputField,
  TextareaField,
  Button,
  TextContentHeading,
  Text,
  Notification,
} from "primitives";
import { IconAlertCircle } from "icons";
import "./referral-form.css";

export type ReferralFormProps = React.ComponentPropsWithoutRef<"form"> & {
  onSubmit?: (data: { referrerName: string; referrerEmail: string; refereeName: string; refereeEmail: string; note?: string }) => void;
};

export function ReferralForm({ onSubmit, ...props }: ReferralFormProps) {
  const [referrerName, setReferrerName] = useState("");
  const [referrerEmail, setReferrerEmail] = useState("");
  const [refereeName, setRefereeName] = useState("");
  const [refereeEmail, setRefereeEmail] = useState("");
  const [note, setNote] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    const data = { referrerName, referrerEmail, refereeName, refereeEmail, note };
    setSent(true);
    onSubmit?.(data);
  };

  return (
    <FormBox className="referral-form" onSubmit={handleSubmit} {...props}>
      <Flex direction="column" gap="400">
        <TextContentHeading
          heading="Refer a friend"
          subheading="Send a referral so your friend can join."
        />

        {sent ? (
          <Notification variant="message" icon={<IconAlertCircle />} isDismissible>
            <Text>Referral sent — thank you for sharing!</Text>
          </Notification>
        ) : null}

        <InputField
          label="Your name"
          placeholder="Full name"
          value={referrerName}
          onChange={(e: any) => setReferrerName(e.target.value)}
          isRequired
        />

        <InputField
          label="Your email"
          placeholder="you@example.com"
          type="email"
          value={referrerEmail}
          onChange={(e: any) => setReferrerEmail(e.target.value)}
          isRequired
        />

        <InputField
          label="Friend's name"
          placeholder="Full name"
          value={refereeName}
          onChange={(e: any) => setRefereeName(e.target.value)}
          isRequired
        />

        <InputField
          label="Friend's email"
          placeholder="friend@example.com"
          type="email"
          value={refereeEmail}
          onChange={(e: any) => setRefereeEmail(e.target.value)}
          isRequired
        />

        <TextareaField
          label="Note (optional)"
          placeholder="Write a short message"
          value={note}
          onChange={(e: any) => setNote(e.target.value)}
        />

        <Button variant="primary" type="submit">
          Send referral
        </Button>
      </Flex>
    </FormBox>
  );
}

export default ReferralForm;
