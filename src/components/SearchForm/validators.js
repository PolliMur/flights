import * as Yup from 'yup';

export const SearchFormSchema = Yup.object({
  origin: Yup.string()
    .required('Origin required!')
    .min(2, 'Less than 2 letters!')
    .max(3, 'Greater than 3 letters!'),

  destination: Yup.string()
    .required('Destination required!')
    .min(2, 'Less than 2 letters!')
    .max(3, 'Greater than 3 letters!'),

  departDate: Yup.date(),
});
