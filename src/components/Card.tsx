import { useEffect, useRef } from "react";
import { ShareIcon } from "../icons/ShareIcons";

declare global {
  interface Window {
    twttr: {
      widgets: {
        load: (element: HTMLElement) => void;
      };
    };
  }
}

interface CardProps {
  title: string;
  link: string;
  type: "twitter" | "youtube";
}

function Card({ title, link, type }: CardProps) {
  const twitterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (type === "twitter" && twitterRef.current) {
      if (window.twttr && window.twttr.widgets) {
        window.twttr.widgets.load(twitterRef.current as HTMLElement);
      } else {
        const script = document.createElement("script");
        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;
        script.onload = () => {
          if (window.twttr && window.twttr.widgets) {
            window.twttr.widgets.load(twitterRef.current as HTMLElement);
          }
        };
        document.body.appendChild(script);
      }
    }
  }, [type, link]);

  return (
    <div>
      <div className="p-4 bg-white rounded-md border-gray-200 max-w-72 border min-h-48 min-w-72">
        <div className="flex justify-between">
          <div className="flex items-center text-md">
            <div className="text-gray-500 pr-2">
              <ShareIcon />
            </div>
            {title}
          </div>
          <div className="flex items-center">
            <div className="pr-2 text-gray-500">
              <a href={link} target="_blank" rel="noopener noreferrer">
                <ShareIcon />
              </a>
            </div>
            <div className="text-gray-500">
              <ShareIcon />
            </div>
          </div>
        </div>

        <div className="pt-4">
          {type === "youtube" && (
            <iframe
              className="w-full aspect-video"
              src={link.replace("watch?v=", "embed/")}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          )}

          {type === "twitter" && (
            <div ref={twitterRef}>
              <blockquote className="twitter-tweet">
                <a href={link.replace("x.com", "twitter.com")}></a>
              </blockquote>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
