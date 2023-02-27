import { memo, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DateTime } from 'luxon';
import { useFormik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { SearchFormSchema } from './validators';

import BaseInput from '@components/BaseInput';
import DateInput from '@components/DateInput';
import BaseButton from '@components/BaseButton';
import Spinner from '@components/Spinner';

import { getTickets, setTickets } from '@redux/actions/tickets';

import Globo from '@assets/svg/Globo';
import Calendar from '@assets/svg/Calendar';

import './index.scss';

const SearchForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [queryParams, setQueryParams] = useState({});

    const { tickets, error, loading } = useSelector((state) => state.tickets);

    useEffect(() => {
        if (tickets.length && !loading) {
            navigate('/tickets', { state: queryParams });
        }
    }, [tickets, loading]);

    useEffect(() => {
        toast.error(error);
    }, [error]);

    const formik = useFormik({
        initialValues: {
            origin: '',
            destination: '',
            departDate: '',
        },
        onSubmit: (values) => {
            dispatch(setTickets([]));
            setQueryParams({});

            const params = {
                origin: values.origin,
                destination: values.destination,
                depart_date:
                    values.departDate || DateTime.now().toFormat('yyyy-MM-dd'),
                return_date:
                    values.departDate || DateTime.now().toFormat('yyyy-MM-dd'),
                currency: 'usd',
                page: 1,
                limit: 10,
            };

            dispatch(getTickets('/week-matrix', params));
            setQueryParams(params);
            formik.resetForm();
        },
        validationSchema: SearchFormSchema,
    });

    return (
        <>
            <div className="search-form-wrapper">
                <form className="search-form" onSubmit={formik.handleSubmit}>
                    <BaseInput
                        id="origin"
                        name="origin"
                        type="text"
                        value={formik.values.origin}
                        placeholder="origin"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.errors.origin}
                        isTouched={formik.touched.origin}
                        Icon={Globo}
                    />

                    <BaseInput
                        id="destination"
                        name="destination"
                        type="text"
                        value={formik.values.destination}
                        placeholder="destination"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.errors.destination}
                        isTouched={formik.touched.destination}
                        Icon={Globo}
                    />

                    <DateInput
                        id="departDate"
                        name="departDate"
                        placeholder="depart date"
                        value={formik.values.departDate}
                        onChange={(date) =>
                            formik.setFieldValue(
                                'departDate',
                                DateTime.fromJSDate(date).toFormat('yyyy-MM-dd')
                            )
                        }
                        onBlur={formik.handleBlur}
                        error={formik.errors.departDate}
                        isTouched={formik.touched.departDate}
                        Icon={Calendar}
                    />

                    <BaseButton
                        className="search-form__button"
                        disabled={loading || !formik.isValid}
                        type="submit"
                    >
                        Search
                    </BaseButton>
                </form>
            </div>
            {loading && <Spinner />}
        </>
    );
};

export default memo(SearchForm);
