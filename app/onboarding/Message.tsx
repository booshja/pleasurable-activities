"use client";

// dependencies
import { useRouter } from "next/navigation";

interface MessageProps {
  variant: "greeting" | "finish";
  nextPage?: () => void;
}

const Message = ({ variant, nextPage }: MessageProps): JSX.Element => {
  const router = useRouter();

  return (
    <section className="p-5 flex flex-col gap-3">
      {variant === "greeting" && (
        <>
          <h1 className="text-2xl font-bold mb-2">Hello!</h1>
          <p className="text-xl">
            In order to get started, we&apos;ve got just a couple of questions
            for you.
          </p>
          <p className="text-xl">
            You&apos;ll need to think of 4 categories of pleasurable activities
            you enjoy, such as - outdoors, mellow, active, etc.
          </p>
          <p className="text-xl">
            After that, you&apos;ll need one activity for each category. Once
            your categories are set up, you&apos;ll be able to add as many
            activities and/or edit your categories from your account page.
          </p>
          <p className="text-xl">Ready to get started?</p>
          <button className="text-2xl self-end mr-5" onClick={nextPage}>
            Let&apos;s go! -&gt;
          </button>
        </>
      )}
      {variant === "finish" && (
        <>
          <h1 className="">And you&apos;re done!</h1>
          <p className="">
            From here you can add more activities, test out the selector tool,
            or edit the categories and activities you just created.
          </p>
          <p className="">Congrats! Enjoy all your activities!</p>
          <button className="" onClick={() => router.push("/home")}>
            Let&apos;s go -&gt;
          </button>
        </>
      )}
    </section>
  );
};

export default Message;
