import React from 'react'
import {fireEvent, render, screen, waitFor} from '@testing-library/react'
import user from '@testing-library/user-event';
import ReportForm from "./ReportForm";
import Modal from "../Modal/Modal";
import App from "../../App";

describe('ReportForm', () => {

    it('onSubmit is called when all fields pass validation', async () => {
        const handleSubmit = jest.fn();
        render(
            <App>
                <Modal >
                    <ReportForm onSubmit={handleSubmit} />
                </Modal>
            </App>
        );
        clickShowModalButton();
        await user.type(findReportName(), 'Test name');
        await user.click(findExcelFormat())
        await user.type(findEmail(), 'test@gmail.com');
        await user.click(findNoRepeatSchema())
        await clickOkButton();

        await waitFor(() => {
            expect(handleSubmit).toHaveBeenCalledWith({
                reportName: 'Test name',
                format: 'excel',
                emailTo: 'test@gmail.com',
                schedule: 'noRepeat',
            });
        });

        expect(handleSubmit).toHaveBeenCalledTimes(1);
    });

    function findReportName() {
        return screen.getByRole('textbox', {
            name: /report name/i
        })
    }

    function findExcelFormat() {
        return screen.getByRole('radio', {
            name: /excel/i
        })
    }

    function findEmail() {
        return screen.getByRole('textbox', {
            name: /e\-mail to/i
        })
    }

    function findNoRepeatSchema() {
        return screen.getByRole('radio', {
            name: /no repeat/i
        })
    }

    function clickOkButton() {
        user.click(screen.getByRole('button', { name: /ok/i }));
    }

    function clickShowModalButton() {
        user.click(screen.getByRole('button', {name: /show modal/i}))
    }
})



