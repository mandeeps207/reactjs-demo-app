import Button from "../components/ui-elements/Button";
import Input from "../components/ui-elements/Input";
import { Link } from "react-router-dom";

const Contact = () => {
  const submitForm = (e: MouseEvent) => {
    e.preventDefault();
    console.log('form submitted')
  }
  return (
    <div className="text-center p-20 bg-[#e6ebf1]">
      <form className="block p-10 rounded-3xl">
        <img src="/tech-clouds-logo.png" alt="Tech Clouds Logo" className="w-40 mx-auto" />
        <h2 className="text-2xl font-bold">Web Development</h2>
        <p className="font-medium mb-3">Made easy!</p>

        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
          </div>
          <Input inputType="text" placeholder="username" />
        </div>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
          </svg>
          </div>
          <Input inputType="password" placeholder="password" />
        </div>
        <Button type="submit" title="Login" event={submitForm} />
      <p className="text-sm font-medium text-gray-500"><Link to="#">Forgot password?</Link> <strong className="text-black">or</strong> <Link to="#">Sign Up</Link></p>
      </form>
    </div>
  )
}

export default Contact;
