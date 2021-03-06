PGDMP     8    4                x            codegig    12.3    12.3                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    16393    codegig    DATABASE     �   CREATE DATABASE codegig WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'English_Kenya.1252' LC_CTYPE = 'English_Kenya.1252';
    DROP DATABASE codegig;
                postgres    false            �            1259    16396    gigs    TABLE     W  CREATE TABLE public.gigs (
    id integer NOT NULL,
    title character varying(200),
    technologies character varying(200),
    budget character varying(20),
    description text,
    contact_email character varying,
    "createdAt" timestamp without time zone,
    "updatedAt" date,
    company character varying(50),
    category text
);
    DROP TABLE public.gigs;
       public         heap    postgres    false            �            1259    16394    gigs_id_seq    SEQUENCE     �   CREATE SEQUENCE public.gigs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.gigs_id_seq;
       public          postgres    false    203            	           0    0    gigs_id_seq    SEQUENCE OWNED BY     ;   ALTER SEQUENCE public.gigs_id_seq OWNED BY public.gigs.id;
          public          postgres    false    202            �
           2604    16399    gigs id    DEFAULT     b   ALTER TABLE ONLY public.gigs ALTER COLUMN id SET DEFAULT nextval('public.gigs_id_seq'::regclass);
 6   ALTER TABLE public.gigs ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    202    203    203                      0    16396    gigs 
   TABLE DATA           �   COPY public.gigs (id, title, technologies, budget, description, contact_email, "createdAt", "updatedAt", company, category) FROM stdin;
    public          postgres    false    203   ]       
           0    0    gigs_id_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.gigs_id_seq', 5, true);
          public          postgres    false    202            �
           2606    16404    gigs gigs_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.gigs
    ADD CONSTRAINT gigs_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.gigs DROP CONSTRAINT gigs_pkey;
       public            postgres    false    203               �  x���NAE�㯨0#1V� 
�<��E6���~�0���68&){$�V����[݇�m+�=�C$�(l2u��͗���ݘ����I�9�L&8ő�8��餙�	�M�IL�\���A��ZC���CfGk���<ExB�4��fҔ�$%�q�����@�sI�ƔĮ �ʋ��ҡ��e�_���mZy(\[Y�i�g�Rm!�2dFFHUv�}��2,�Y�5�5G����dzp8���t���k�x�Qk�g�����訹�5_}'��8KG6��쀪�T�
�5K������W�֕�����4���������F����6��|Z�0:n�}�vt���}�c��vz��#:�P����b�ʅ8�g�-]o\�I%��"��%+��PURK��Q��Z��)�?o����ՀA�� �����F�J~+p �\b�[%�l��hڝu�V�XeS,�Ю���CSg��s�Ԏ�u�)�bģ�b3�Z5�˱��8vҼ�M��\k�W�M�Mf{>��+�.�s�_���;����\��9��N��9
U-},��P�Z�	r���ӾX�*ˮ^��
f�1�FǷ��Dd��o�"KB�='�ll+��'�h{d��M�s2[�:��p�{���_/(�I�=��Y���2���Wt��8���}�pKV���Ю��������7�{3���F?go-     