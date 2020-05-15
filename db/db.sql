--
-- PostgreSQL database dump
--

-- Dumped from database version 12.3
-- Dumped by pg_dump version 12.3

-- Started on 2020-05-15 18:24:53

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 203 (class 1259 OID 16396)
-- Name: gigs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.gigs (
    id integer NOT NULL,
    title character varying(200),
    technologies character varying(200),
    budget character varying(20),
    description text,
    contact_email character varying,
    "createdAt" date,
    "updatedAt" date
);


ALTER TABLE public.gigs OWNER TO postgres;

--
-- TOC entry 202 (class 1259 OID 16394)
-- Name: gigs_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.gigs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.gigs_id_seq OWNER TO postgres;

--
-- TOC entry 2824 (class 0 OID 0)
-- Dependencies: 202
-- Name: gigs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.gigs_id_seq OWNED BY public.gigs.id;


--
-- TOC entry 2688 (class 2604 OID 16399)
-- Name: gigs id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gigs ALTER COLUMN id SET DEFAULT nextval('public.gigs_id_seq'::regclass);


--
-- TOC entry 2818 (class 0 OID 16396)
-- Dependencies: 203
-- Data for Name: gigs; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.gigs (id, title, technologies, budget, description, contact_email, "createdAt", "updatedAt") FROM stdin;
1	Looking for a react developer	React, JS, HTML, css	$3000	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam vero sequi corporis, vitae iste esse a ratione nemo natus accusamus, assumenda impedit blanditiis, eum consequatur hic. Laboriosam voluptas aperiam consectetur.	john@doe.com	2020-05-15	2020-05-15
2	JavaFX animated login and sign up form	java,flutter	$5000	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam vero sequi corporis, vitae iste esse a ratione nemo natus accusamus, assumenda impedit blanditiis, eum consequatur hic. Laboriosam voluptas aperiam consectetur.	muriithijames556@gmail.com	2020-05-15	2020-05-15
\.


--
-- TOC entry 2825 (class 0 OID 0)
-- Dependencies: 202
-- Name: gigs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.gigs_id_seq', 2, true);


--
-- TOC entry 2690 (class 2606 OID 16404)
-- Name: gigs gigs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gigs
    ADD CONSTRAINT gigs_pkey PRIMARY KEY (id);


-- Completed on 2020-05-15 18:24:53

--
-- PostgreSQL database dump complete
--

