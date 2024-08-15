"use client";

import { FaGoogle } from "react-icons/fa";
import { Button } from "./button";
import { getGoogleOauthConsentUrl } from "../../app/actions";
import toast from "react-hot-toast";

function GoogleOauthButton() {
  return (
    <Button
      className="w-full"
      onClick={async () => {
        const res = await getGoogleOauthConsentUrl();
        console.log("Response from getGoogleOauthConsentUrl:", res);
        if (res.url) {
          window.location.href = res.url;
        } else {
          toast.error(res.error);
        }
      }}
    >
      <FaGoogle />
    </Button>
  );
}

export default GoogleOauthButton;
