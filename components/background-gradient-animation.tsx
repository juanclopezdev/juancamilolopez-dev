"use client";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { useTheme } from 'next-themes'


export const BackgroundGradientAnimation = ({
  gradientBackgroundStart = "rgb(255, 219, 242)", //--background
  gradientBackgroundEnd = "rgb(255, 201, 237)", //--details
  firstColor = "191, 236, 255", //--secondary
  secondColor = "205, 193, 255", //--tertiary
  thirdColor = "191, 236, 255", //--secondary
  fourthColor = "205, 193, 255", //--tertiary
  fifthColor = "191, 236, 255", //--secondary
  pointerColor = "255, 110, 207", //--details 20% mas oscuro
  darkGradientBackgroundStart = "rgb(28, 13, 2)", //--darkbackground
  darkGradientBackgroundEnd = "rgb(5, 6, 9)", //--darkdetails
  darkFirstColor = "71, 102, 115", //--darksecondary
  darkSecondColor = "140, 128, 189", //--darktertiary
  darkThirdColor = "71, 102, 115", //--darksecondary
  darkFourthColor = "140, 128, 189", //--darktertiary
  darkFifthColor = "71, 102, 115", //--darksecondary
  darkPointerColor = "142, 100, 94", //--darkdetails 20% mas claro
  size = "100%",
  blendingValue = "hard-light",
  children,
  className,
  interactive = true,
  containerClassName,
} : {
  gradientBackgroundStart?: string;
  gradientBackgroundEnd?: string;
  firstColor?: string;
  secondColor?: string;
  thirdColor?: string;
  fourthColor?: string;
  fifthColor?: string;
  pointerColor?: string;
  darkGradientBackgroundStart?: string;
  darkGradientBackgroundEnd?: string;
  darkFirstColor?: string;
  darkSecondColor?: string;
  darkThirdColor?: string;
  darkFourthColor?: string;
  darkFifthColor?: string;
  darkPointerColor?: string;
  size?: string;
  blendingValue?: string;
  children?: React.ReactNode;
  className?: string;
  interactive?: boolean;
  containerClassName?: string;
}) => {
  const { setTheme, resolvedTheme } = useTheme()
  const interactiveRef = useRef<HTMLDivElement>(null);

  const [curX, setCurX] = useState(0);
  const [curY, setCurY] = useState(0);
  const [tgX, setTgX] = useState(0);
  const [tgY, setTgY] = useState(0);
  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if(resolvedTheme === 'light'){
    document.body.style.setProperty(
      "--gradient-background-start",
      gradientBackgroundStart
    );
    document.body.style.setProperty(
      "--gradient-background-end",
      gradientBackgroundEnd
    );
    document.body.style.setProperty("--first-color", firstColor);
    document.body.style.setProperty("--second-color", secondColor);
    document.body.style.setProperty("--third-color", thirdColor);
    document.body.style.setProperty("--fourth-color", fourthColor);
    document.body.style.setProperty("--fifth-color", fifthColor);
    document.body.style.setProperty("--pointer-color", pointerColor);
    document.body.style.setProperty("--size", size);
    document.body.style.setProperty("--blending-value", blendingValue);
    }
    else{
      document.body.style.setProperty(
        "--gradient-background-start",
        darkGradientBackgroundStart
      );
      document.body.style.setProperty(
        "--gradient-background-end",
        darkGradientBackgroundEnd
      );
      document.body.style.setProperty("--first-color", darkFirstColor);
      document.body.style.setProperty("--second-color", darkSecondColor);
      document.body.style.setProperty("--third-color", darkThirdColor);
      document.body.style.setProperty("--fourth-color", darkFourthColor);
      document.body.style.setProperty("--fifth-color", darkFifthColor);
      document.body.style.setProperty("--pointer-color", darkPointerColor);
      document.body.style.setProperty("--size", size);
      document.body.style.setProperty("--blending-value", blendingValue);
    }
  }, [resolvedTheme]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    function move() {
      if (!interactiveRef.current) {
        return;
      }
      setCurX(curX + (tgX - curX) / 20);
      setCurY(curY + (tgY - curY) / 20);
      interactiveRef.current.style.transform = `translate(${Math.round(
        curX
      )}px, ${Math.round(curY)}px)`;
    }

    move();
  }, [tgX, tgY]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (interactiveRef.current) {
      const rect = interactiveRef.current.getBoundingClientRect();
      setTgX(event.clientX - rect.left);
      setTgY(event.clientY - rect.top);
    }
  };

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
  }, []);


  return (
    <div
      className={cn(
        "h-[130vh] w-full relative overflow-hidden top-0 left-0 bg-[linear-gradient(90deg,var(--gradient-background-start),var(--gradient-background-end))]",
        containerClassName
      )}
    >
      {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
      <svg className="hidden">
        <defs>
          <filter id="blurMe">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className={cn("", className)}>{children}</div>
      <div
        className={cn(
          "gradients-container h-full w-full blur-lg",
          isSafari ? "blur-2xl" : "[filter:url(#blurMe)_blur(40px)]"
        )}
      >
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_var(--first-color)_0,_var(--first-color)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:center_center]`,
            `animate-first`,
            `opacity-100`
          )}
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--second-color),_0.8)_0,_rgba(var(--second-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:calc(50%-400px)]`,
            `animate-second`,
            `opacity-100`
          )}
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--third-color),_0.8)_0,_rgba(var(--third-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:calc(50%+400px)]`,
            `animate-third`,
            `opacity-100`
          )}
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--fourth-color),_0.8)_0,_rgba(var(--fourth-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:calc(50%-200px)]`,
            `animate-fourth`,
            `opacity-70`
          )}
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--fifth-color),_0.8)_0,_rgba(var(--fifth-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:calc(50%-800px)_calc(50%+800px)]`,
            `animate-fifth`,
            `opacity-100`
          )}
        ></div>

        {interactive && (
          <div
            ref={interactiveRef}
            onMouseMove={handleMouseMove}
            className={cn(
              `absolute [background:radial-gradient(circle_at_center,_rgba(var(--pointer-color),_0.8)_0,_rgba(var(--pointer-color),_0)_50%)_no-repeat]`,
              `[mix-blend-mode:var(--blending-value)] w-full h-full -top-1/2 -left-1/2`,
              `opacity-70`
            )}
          ></div>
        )}
      </div>
    </div>
  );
};
