import useSignUpStore from "../../../stores/signUpStore";

export default function SignUpInputForm({type="text", placeholder, name, ...props}) {
    const signUpInfo = useSignUpStore((state) => state.signUpInfo);
    const setInfo = useSignUpStore((state) => state.setInfo);

    return (
        <input
            type={type}
            placeholder={placeholder}
            onChange={(e) => setInfo({[e.target.name]: e.target.value})}
            name={name}
            value={signUpInfo[name]}
            {...props}
        />
    );
}