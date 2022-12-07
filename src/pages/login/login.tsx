import Button from "../../components/button/button";
import Input from "../../components/input/input";
import { Card, Title } from "./styles"
import { IFormLogin, defaultValues} from "./types"
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object ({
	email: yup.string().email("Email inválido").required("Campo obrigatório"),
	password: yup.string().min(6, "Sua senha deve conter mais de seis caracteres").required("Campo obrigatório")
}).required()

const Login = () => {
	const { control, formState: { errors, isValid } } = useForm <IFormLogin> ({
		resolver: yupResolver(schema),
		mode: "onBlur",
		reValidateMode: "onChange",
		defaultValues
	})

	return (
		<>
			<Card>
				<Title>Login</Title>
				<Input name="email" type="email" placeholder="Email" control={control} errorMessage={errors?.email?.message as string}/>
				<Input name="password" type="password" placeholder="******" control={control} errorMessage={errors?.password?.message as string}/>
				<Button label="Fazer login" disabled={!isValid} onClick={() => alert("clicou")}/>
			</Card>
		</>
	);
};

export default Login;
