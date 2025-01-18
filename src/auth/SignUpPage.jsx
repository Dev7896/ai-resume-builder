import {
SignIn
} from "@clerk/clerk-react";
import '../styles/signup.css'

export default function SignUpPage() {
  return (
    <div className="signup">
      <SignIn className='mx-auto' />
    </div>
  );
}
