import { InputContainer } from "./styles";
import { IInput } from "./types";
import { Controller } from "react-hook-form";

const Input = ({ control, name, errorMessage, type, ...rest }: IInput) => {
	return (
		<InputContainer>
			<Controller
				name={name}
				control={control}
				render={({ field: { onChange, onBlur, value, ref } }) => (
					<input
						{...rest}
						onChange={onChange}
						onBlur={onBlur}
						value={value}
						ref={ref}
						type= {type}
					/>
				)}
			/>
            {errorMessage ? <p>{errorMessage}</p> : null}
		</InputContainer>
	);
};

export default Input;
