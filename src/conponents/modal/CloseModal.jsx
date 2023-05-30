import { Modal } from "../modal/Modal";
import { useSearchParams } from "react-router-dom";
import { styled } from "styled-components";
import React from "react";

export const CloseModal = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { modalCondition } = Object.fromEntries(searchParams);

  const openModal = () => {
    setSearchParams({ modalCondition: "AddNewMaterial" });
  };
  const closeModal = () => {
    setSearchParams({});
  };
  return (
    <div>
      <OpenModal onClick={openModal}>Add new material</OpenModal>
      {modalCondition && (
        <Modal onClose={closeModal}>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore harum deserunt ullam illo velit nihil, a tempore autem
              tempora, doloremque alias hic ipsum iste. Distinctio assumenda
              quas repellat ad in.
            </p>
            <Button onClick={closeModal}>Close that</Button>
          </div>
        </Modal>
      )}
    </div>
  );
};
const OpenModal = styled.button`
  width: 200px;
  height: 40px;
  border-radius: 20px;
  background-color: #dd7317;
  color: #fff;
  border: none;
  margin-left: 550px;
  margin-top: 50px;
`;
const Button = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 12px;
  background-color: green;
  border: none;
`;
