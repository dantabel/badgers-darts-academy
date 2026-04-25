import { Button } from "@/components/ui/button"
import { Item, ItemActions, ItemContent, ItemDescription, ItemTitle } from "@/components/ui/item"

const Register: React.FC = () => (
  <div>
    <iframe
      id="JotFormIFrame-260545998894076"
      title="Pontyclun Badgers Junior Darts Academy"
      // onload="window.parent.scrollTo(0,0)"
      allowTransparency={true}
      allow="geolocation; microphone; camera; fullscreen; payment"
      src="https://form.jotform.com/260545998894076"
      // frameBorder={0}
      // style="min-width:100%;max-width:100%;height:539px;border:none;"
      style={{minWidth: '100%', maxWidth: '100%', height: '100vh', border: 'none'}}
      // scrolling="yes"
    ></iframe>
    <script src="https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js"></script>
    <script>
      window.jotformEmbedHandler("iframe[id='JotFormIFrame-260545998894076']",
      "https://form.jotform.com/")
    </script>
  </div>
);

export default Register;
