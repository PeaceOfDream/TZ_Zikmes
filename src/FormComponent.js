import { useForm } from 'react-hook-form';
import './App.scss';
import { fetchFunc } from './fetchFunc';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';

export const FormComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetchFunc(data);
  };
  return (
    <>
      <form className="form_container" onSubmit={handleSubmit(onSubmit)}>
        <div className="input_container">
          <input
            name="tel"
            {...register('numberRequired', { required: true })}
            className="input_number"
            type="tel"
            placeholder="Ваш номер..."
          />
        </div>
        <button type="submit" className="button">
          ЗАКАЗАТЬ
          <FontAwesomeIcon className="button_icon" icon={faBagShopping} />
        </button>
      </form>
      {errors.numberRequired && <p className='error_message'>Поле обязательно для заполнения</p>}
    </>
  );
};
