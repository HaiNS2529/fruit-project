import styled from "styled-components";

export const Wrap = styled.div`
table td, table th {
    border:none;
    text-align: left;
    padding: 16px;
    border-bottom: 1px solid #a2aac2;
  }
  .ant-table-expanded-row-level-1 > td.ant-table-cell{
    background: #fafafa;
    padding-bottom: 6px;
  }
  table tr:nth-child(even) {
    background-color: white;
  }
`;