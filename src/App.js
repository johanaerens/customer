import './App.css';
import {AuthenticationProvider, oidcLog, OidcSecure} from "@axa-fr/react-oidc-context";
import oidcConfiguration from './oidc-configuration';
import UserName from "./components/UserName";

function App() {
  return (
      <AuthenticationProvider configuration={oidcConfiguration} loggerLevel={oidcLog.DEBUG}>
          <OidcSecure>
              <UserName/>
          </OidcSecure>
      </AuthenticationProvider>
  );
}

export default App;
