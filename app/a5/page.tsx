"use client";

import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import { Accordion, AccordionItem } from "@heroui/react";
import { addToast } from "@heroui/toast";

import { title } from "@/components/primitives";
import ConfettiButton from "@/components/confettiButton";

export default function A5Page() {
  const Reason1toast = () => {
    addToast({
      title: "Reason #1",
      description:
        "Megamind didn't mean to cause chaos in the city, he only accidentally created the destructive Tighten.",
      color: "danger",
    });
  };

  const Reason2toast = () => {
    addToast({
      title: "Reason #2",
      description:
        "After Megamind caused all of that chaos, he worked hard to defeat Tighten and ultimately save Metro City.",
      color: "danger",
    });
  };

  const Reason3toast = () => {
    addToast({
      title: "Reason #3",
      description:
        "Eventually Megamind becomes the city protector and fights off any threats to the city, showing that in his heart he is a good guy.",
      color: "danger",
    });
  };

  return (
    <div>
      <h1 className={title()}>A5: Defend the fictional villan</h1>
      <Image
        alt="megamind with drones"
        src="https://issaquah.instructure.com/users/48573/files/21246150/download?download_frd=1&verifier=iUs4PpyPkatzPlvnApGy8vsgiWuXZxZbzJK9hwQQ"
        width={100}
      />
      <Image
        alt="megamind about to attack"
        src="https://issaquah.instructure.com/users/48573/files/21246152/download?download_frd=1&verifier=u5GMMv27NeFgbQYiWnNt0fpL5mry9r2ZVZgKG58r"
        width={100}
      />
      <Button
        color="primary"
        onClick={() => {
          Reason1toast();
        }}
      >
        Reason #1
      </Button>
      <Button
        color="secondary"
        onClick={() => {
          Reason2toast();
        }}
      >
        Reason #2
      </Button>
      <Button
        color="primary"
        onClick={() => {
          Reason3toast();
        }}
      >
        Reason #3
      </Button>
      <Image
        alt="smiling megamind"
        src="https://issaquah.instructure.com/users/48573/files/21246158/download?download_frd=1&verifier=wafIaWrwS9il7TfDxDcPhORv535ypdDaVqc4ziYe"
        width={100}
      />
      <Image
        alt="devious megamind"
        src="https://issaquah.instructure.com/users/48573/files/21246165/download?download_frd=1&verifier=6GwKPCMDFADLKYxIttRKFiCJHAnDf3LmAAGauOIk"
        width={100}
      />

      <div>
        <div className="my-3">
          <span className="text-xs">
            Celebrate your new understanding of Megamind!
          </span>
        </div>
        <div className="flex gap-4">
          <ConfettiButton />
        </div>
      </div>

      <Image
        alt="even more devious megamind"
        src="https://issaquah.instructure.com/users/48573/files/21246170/download?download_frd=1&verifier=CzvCwIHmEs1MmC2cHNG1iqJsdpmtqoX6txjEtHeY"
        width={100}
      />
      <Image
        alt="megamind and fish friend"
        src="https://issaquah.instructure.com/users/48573/files/21246189/download?download_frd=1&verifier=sLJnxCMzlpuBKzwCm83qhdyTElWjJWCTcxsvf5ke"
        width={100}
      />

      <section className="my-40">
        <h2 className="text-center text-4xl font-bold">
          Extra things about Megamind!
        </h2>
        <Accordion>
          <AccordionItem key={1} title="Was he always evil?">
            Kind of, but growing up Megamind was always an outcast. So it&apos;s
            not all his fault that he grew up to treat others poorly, just as he
            was treated as a child.
          </AccordionItem>
          <AccordionItem key={2} title="Where did Megamind grow up?">
            Megamind was being raised in a prison, further supporting his evil
            uprising that made him into the person he became.
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  );
}
