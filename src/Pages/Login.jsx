import Form from "../Components/Form";
import Header from "../Components/Header";

const Login = () => {
  return (
    <div>
      <div
        className="min-h-screen bg-no-repeat bg-center bg-cover bg-fixed"
        style={{
          backgroundImage: `url("https://assets.nflxext.com/ffe/siteui/vlv3/d44b8e7c-e52b-45bc-9568-7d009f91c9ee/web/IN-en-20250929-TRIFECTA-perspective_82a31bf9-6c15-4866-9ba4-fed503316d1d_small.jpg")`,
        }}
      >
        <div className="bg-black/35 min-h-screen">
          <Header />
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Login;
