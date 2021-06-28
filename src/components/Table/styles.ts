import styled from 'styled-components';
import { Box } from 'components/Box';
import { theme } from 'styled-tools';

export const TableWrapper = styled(Box)`
    .ant-table table {
        border-collapse: separate;
        border-spacing: 0 10px;
    }
    .ant-table,
    .ant-table-tbody > tr.ant-table-placeholder:hover > td {
        background: transparent;
    }
    .ant-table-tbody > tr.ant-table-row:hover > td {
        background: #dedeed;
    }
    .ant-table-tbody > tr > td {
        border-bottom: none;
        background: #e4e4ef;
        color: #252525;
        font-weight: 500;
        white-space: pre;
        :first-child {
            border-top-left-radius: 15px;
            border-bottom-left-radius: 15px;
        }
        :last-child {
            border-top-right-radius: 15px;
            border-bottom-right-radius: 15px;
        }
    }
    .ant-table-filter-trigger-container {
        background: #ebebeb;
    }
    .ant-table-thead > tr > th {
        background: ${theme('colors.gray.50')};
        border-right: none;
        text-align: center;
        color: #606060;
        font-weight: bold;
    }
`;
