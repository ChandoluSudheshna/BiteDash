import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Offcanvas } from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Button } from "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Row, Col, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SignIn = ({ isOpen, onClose, onLoginSuccess }) => {
  const API_BASE_URL = process.env.API_URL;
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    const offcanvasElement = document.getElementById("signInDrawer");
    if (!offcanvasElement) return;
    const bsOffcanvas = Offcanvas.getOrCreateInstance(offcanvasElement);
    if (isOpen) {
      bsOffcanvas.show();
    } else {
      bsOffcanvas.hide();
    }

    // close callback
    offcanvasElement.addEventListener("hidden.bs.offcanvas", onClose);
    return () => {
      offcanvasElement.removeEventListener("hidden.bs.offcanvas", onClose);
    };
  }, [isOpen, onClose]);

  const validationSchema = Yup.object({
    ...(isLogin
      ? {}
      : {
          name: Yup.string().required("Name is required"),
          email: Yup.string()
            .email("Invalid email")
            .required("Email is required"),
        }),
    phone: Yup.string()
      .matches(/^\d{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),
  });

  const handleSubmit = async (values, actions) => {
    console.log(isLogin ? "Logging in" : "signing up ", values);
    try {
      const response = await axios.get(
        `${API_BASE_URL}/users?phone=${values.phone.toString()}`
      );
      const users = response.data;

      if (isLogin) {
        if (users.length > 0) {
          onLoginSuccess(users[0]);
          navigate("/");
        } else {
          alert("Phone number not found. Please sign up first.");
        }
      } else {
        if (users.length > 0) {
          alert("Mobile number already exists. Please login instead.");
        } else {
          await axios.post(`${API_BASE_URL}/users`, {
            name: values.name,
            phone: values.phone,
            email: values.email,
          });
          alert("Account created successfully!");
          setIsLogin(true);
        }
      }
    } catch (error) {
      console.log(error);
      alert("something went wrong");
    } finally {
      actions.setSubmitting(false);
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div>
      <div
        className="offcanvas offcanvas-end custom-drawer"
        tabIndex="-1"
        id="signInDrawer"
        aria-labelledby="signinDrawerLabel"
      >
        <div className="offcanvas-header">
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <Container>
            <Row>
              <Col>
                <h1>{isLogin ? "Login" : "Sign Up"}</h1>
                <p>
                  <span className="mr-1">or</span>
                  <button
                    type="button"
                    className="login-create mr-1"
                    onClick={toggleForm}
                  >
                    {isLogin ? "create a" : " login to your"} account
                  </button>
                </p>
                <hr className="login-hr"></hr>
              </Col>
              <Col>
                <img
                  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
                  className="login-img"
                />
              </Col>
            </Row>
            <Formik
              initialValues={{ phone: "", name: "", email: "" }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="mb-3">
                    <Field
                      type="text"
                      name="phone"
                      className="form-control login-phone"
                      placeholder="Phone Number"
                    />
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="text-danger mt-1"
                    />
                    {!isLogin && (
                      <>
                        <Field
                          type="text"
                          name="name"
                          className="form-control login-phone"
                          placeholder="Name"
                        />
                        <ErrorMessage
                          name="name"
                          component="div"
                          className="text-danger mt-1"
                        />
                        <Field
                          type="email"
                          name="email"
                          className="form-control login-phone"
                          placeholder="Email"
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="text-danger mt-1"
                        />
                      </>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="btn w-100 login-button"
                    disabled={isSubmitting}
                  >
                    {isSubmitting
                      ? "Loading..."
                      : isLogin
                      ? "LOGIN"
                      : "CONTINUE"}
                  </button>
                </Form>
              )}
            </Formik>
            <p className="login-TC">
              By clicking on Login, I accept the{" "}
              <span className="login-terms">
                Terms & Conditions & Privacy Policy
              </span>
            </p>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
