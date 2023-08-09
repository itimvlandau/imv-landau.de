import ResponsiveIframe from "@/components/ResponsiveIframe";

export default function Prayer() {
  return (
    <ResponsiveIframe>
      <iframe
        width="853"
        height="480"
        src="https://www.youtube.com/embed/F5sq6XymxBU"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </ResponsiveIframe>
  );
}
