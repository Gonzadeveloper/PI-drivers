PGDMP       ,                |            f1    16.1    16.1 "               0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    75857    f1    DATABASE     y   CREATE DATABASE f1 WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Argentina.1252';
    DROP DATABASE f1;
                postgres    false            �            1259    76560 
   Activities    TABLE     �   CREATE TABLE public."Activities" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    dificultad character varying(255) NOT NULL,
    "duración" character varying(255) NOT NULL,
    temporada character varying(255) NOT NULL
);
     DROP TABLE public."Activities";
       public         heap    postgres    false            �            1259    76559    Activities_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Activities_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public."Activities_id_seq";
       public          postgres    false    220                       0    0    Activities_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public."Activities_id_seq" OWNED BY public."Activities".id;
          public          postgres    false    219            �            1259    76568 	   Countries    TABLE     z  CREATE TABLE public."Countries" (
    id character varying(255) NOT NULL,
    name character varying(255) NOT NULL,
    "officialName" character varying(255) NOT NULL,
    image character varying(255) NOT NULL,
    continents character varying(255) NOT NULL,
    capital character varying(255) NOT NULL,
    subregion character varying(255) NOT NULL,
    area character varying(255) NOT NULL,
    population character varying(255) NOT NULL,
    maps character varying(255) NOT NULL,
    timezones character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public."Countries";
       public         heap    postgres    false            �            1259    76529    Drivers    TABLE     �  CREATE TABLE public."Drivers" (
    id uuid NOT NULL,
    name character varying(255) NOT NULL,
    last_name character varying(255) NOT NULL,
    description character varying(255) NOT NULL,
    image character varying(255) NOT NULL,
    nationality character varying(255) NOT NULL,
    birthdate character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public."Drivers";
       public         heap    postgres    false            �            1259    76537    Teams    TABLE     �   CREATE TABLE public."Teams" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public."Teams";
       public         heap    postgres    false            �            1259    76536    Teams_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Teams_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public."Teams_id_seq";
       public          postgres    false    217                       0    0    Teams_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public."Teams_id_seq" OWNED BY public."Teams".id;
          public          postgres    false    216            �            1259    76543    relations_table    TABLE     �   CREATE TABLE public.relations_table (
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "TeamId" integer NOT NULL,
    "DriverId" uuid NOT NULL
);
 #   DROP TABLE public.relations_table;
       public         heap    postgres    false            �            1259    76575 
   user_twist    TABLE     �   CREATE TABLE public.user_twist (
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "ActivityId" integer NOT NULL,
    "CountryId" character varying(255) NOT NULL
);
    DROP TABLE public.user_twist;
       public         heap    postgres    false            f           2604    76563    Activities id    DEFAULT     r   ALTER TABLE ONLY public."Activities" ALTER COLUMN id SET DEFAULT nextval('public."Activities_id_seq"'::regclass);
 >   ALTER TABLE public."Activities" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    219    220    220            e           2604    76540    Teams id    DEFAULT     h   ALTER TABLE ONLY public."Teams" ALTER COLUMN id SET DEFAULT nextval('public."Teams_id_seq"'::regclass);
 9   ALTER TABLE public."Teams" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    217    217                      0    76560 
   Activities 
   TABLE DATA           T   COPY public."Activities" (id, name, dificultad, "duración", temporada) FROM stdin;
    public          postgres    false    220   �+                 0    76568 	   Countries 
   TABLE DATA           �   COPY public."Countries" (id, name, "officialName", image, continents, capital, subregion, area, population, maps, timezones, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    221   �+                 0    76529    Drivers 
   TABLE DATA           ~   COPY public."Drivers" (id, name, last_name, description, image, nationality, birthdate, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    215   e                 0    76537    Teams 
   TABLE DATA           E   COPY public."Teams" (id, name, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    217   �h       	          0    76543    relations_table 
   TABLE DATA           Y   COPY public.relations_table ("createdAt", "updatedAt", "TeamId", "DriverId") FROM stdin;
    public          postgres    false    218   vt                 0    76575 
   user_twist 
   TABLE DATA           Y   COPY public.user_twist ("createdAt", "updatedAt", "ActivityId", "CountryId") FROM stdin;
    public          postgres    false    222   �u                  0    0    Activities_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public."Activities_id_seq"', 1, false);
          public          postgres    false    219                       0    0    Teams_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public."Teams_id_seq"', 203, true);
          public          postgres    false    216            n           2606    76567    Activities Activities_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public."Activities"
    ADD CONSTRAINT "Activities_pkey" PRIMARY KEY (id);
 H   ALTER TABLE ONLY public."Activities" DROP CONSTRAINT "Activities_pkey";
       public            postgres    false    220            p           2606    76574    Countries Countries_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public."Countries"
    ADD CONSTRAINT "Countries_pkey" PRIMARY KEY (id);
 F   ALTER TABLE ONLY public."Countries" DROP CONSTRAINT "Countries_pkey";
       public            postgres    false    221            h           2606    76535    Drivers Drivers_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public."Drivers"
    ADD CONSTRAINT "Drivers_pkey" PRIMARY KEY (id);
 B   ALTER TABLE ONLY public."Drivers" DROP CONSTRAINT "Drivers_pkey";
       public            postgres    false    215            j           2606    76542    Teams Teams_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public."Teams"
    ADD CONSTRAINT "Teams_pkey" PRIMARY KEY (id);
 >   ALTER TABLE ONLY public."Teams" DROP CONSTRAINT "Teams_pkey";
       public            postgres    false    217            l           2606    76547 $   relations_table relations_table_pkey 
   CONSTRAINT     t   ALTER TABLE ONLY public.relations_table
    ADD CONSTRAINT relations_table_pkey PRIMARY KEY ("TeamId", "DriverId");
 N   ALTER TABLE ONLY public.relations_table DROP CONSTRAINT relations_table_pkey;
       public            postgres    false    218    218            r           2606    76579    user_twist user_twist_pkey 
   CONSTRAINT     o   ALTER TABLE ONLY public.user_twist
    ADD CONSTRAINT user_twist_pkey PRIMARY KEY ("ActivityId", "CountryId");
 D   ALTER TABLE ONLY public.user_twist DROP CONSTRAINT user_twist_pkey;
       public            postgres    false    222    222            s           2606    76553 -   relations_table relations_table_DriverId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.relations_table
    ADD CONSTRAINT "relations_table_DriverId_fkey" FOREIGN KEY ("DriverId") REFERENCES public."Drivers"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 Y   ALTER TABLE ONLY public.relations_table DROP CONSTRAINT "relations_table_DriverId_fkey";
       public          postgres    false    215    4712    218            t           2606    76548 +   relations_table relations_table_TeamId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.relations_table
    ADD CONSTRAINT "relations_table_TeamId_fkey" FOREIGN KEY ("TeamId") REFERENCES public."Teams"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 W   ALTER TABLE ONLY public.relations_table DROP CONSTRAINT "relations_table_TeamId_fkey";
       public          postgres    false    217    4714    218            u           2606    76580 %   user_twist user_twist_ActivityId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.user_twist
    ADD CONSTRAINT "user_twist_ActivityId_fkey" FOREIGN KEY ("ActivityId") REFERENCES public."Activities"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 Q   ALTER TABLE ONLY public.user_twist DROP CONSTRAINT "user_twist_ActivityId_fkey";
       public          postgres    false    4718    222    220            v           2606    76585 $   user_twist user_twist_CountryId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.user_twist
    ADD CONSTRAINT "user_twist_CountryId_fkey" FOREIGN KEY ("CountryId") REFERENCES public."Countries"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 P   ALTER TABLE ONLY public.user_twist DROP CONSTRAINT "user_twist_CountryId_fkey";
       public          postgres    false    221    222    4720                  x������ � �            x��}ɮ�J�ݘ�{R6�{��Y3�궺-Q�`�!ER$%��ب+�����#�0��{������/q&�lRb�{�_����t�̈+"[�.ղ��tk�,6��,�.#No�����rm��5��п��_��M)��5 ��.t�`�����(�B��z��hV)�E������ ������m�[ו;��ЎKi�l�����P������N14�}��o����2�_9�WI���n�i�ѩ��:0t� 'Xf�(]��U�0�Z���57>����wj$��e��L �ʬT(dx��͕'�����MH����Y����o8o�`s�ȅ�D!��T�OÂ>z��zpkY��������4{�D�4W(�Ѷ�?�OV��,�	�X� ���_��_����ٮR�
C�ֶ���h�yN7��~'+�ߩ��[�"9�eQ�%�P�J|����j�b*�ϊ֩ԩ4�#��9�2�D�<;'����G���>(؍"��A�ȅ�)���(�
k�k����ح+T׵��O˴B�y��y�G�r������+
�`e$j�x���q79��ZtN�r	����S� 4�O5`�X�[o-׷����]��[������y0�(�$�C��Y�+�u ��Ҳ�z�ʊ\�m�3��.����D�<%J�9��i��`��B7/��z���#IIa���]�ab4��L��f�>�Q����ߐ�a���b��'�h_dL����YQ�V�W���� NdJ��/�r�Z�Y̱j%�H���E�o4������XG����֣��>C�+���
�ʗNٗ|�{Ö���w�,p��Sh.e�y�P̈�E���:���;��UL�n+�������V�&�ڳ|7B�0��(w�ewa��p�S���X_��$�b�a��rd�~c0i%;���)����NiN��`��m�oRCd��8S`�t�(�q̈�^ۜ��z����{M��DX`���y�Z�����,�����=׀�4��|;p���.��
�Q�TmF/M�Cd`W��m�|���}�Gv�␂�F�p�V�b��Y� ���m���+3;V��� �1��=�lU��{�G����S�W��8�ak�U��2��e���L���p��i�d�&6#gLƮ�V��P�3�,qB�;�81Ö��|G�{�(��\������`����U,/0�=1r���:���9�m66��ѳ�dX	!S@�F�T��z����	���B�l'eLb}�A&z�?d��䝉�������@��q�0��<'S }���O���qQ^ �h��U����O/�	�t�T�]G�k��m�Ak'�x�i���x����Y���5��Nv���R۾:a� ���A�Co��%Q(������7z3�����&����][o7v��x�oܺ1R����'$�[�,B�v�m��e�����C���_�Ԥ�	����k�9٫��K抿_	�+�~u�
�{��+���W���05q�:��%����#I`J��"QѪ���0��.M|1bH��ܘ���ȯڧ�V��T5v�`�q���:��V�SQ�i�u�,BzR� �� �{Y��ՙ>��'��I������f>;��y����{�]���6D�:ɓ��4�l�]�#-Ki'V ���.��	k�B�B��-�s��,�2̭�DH�i��<�DVFBk1[���Z49{��l������s�����WL�.���Bf߃R4�>Pza�ty��j`�I�W�����u��,1�w�8�-h�X?r5���8��=޷'^�,��_�Z�����;U���@��B!<�oJE��
��+�*���������#خ� �����TA���s+*7��
lP����M�zT��S��=��p�=�;��FS�����u�-��,Z���7�^��a�M�����������0X� 1�k�ʖ�u��k��v(��W^рC��\ah漉t�,��OU��������47��p!K���cx��9�#S�K�:�.�|�(�`���Oj��kB3u������E�}��q����vp]��4�24�hs�HnV�H-�ф��R�u�V��&3����Ծ��t
�/�A�AFc��4�з�q��A�"�I�,
�)�%3r��>�d�5ʀc�V�:hXf�wS. �p��[���u�]Y7Wٞ�fax�,�݊�9���Nկ	�f&�N,C�A{L!U>��=4�|.#;N`���n�7�n��'	]�|���U]>�v�q�e����R�QS��b�nI�Fݍ�y���k��\$�d�C~�ʜD���m�.�G���0wk��;�R	v�mQ� 
�y�t"Jv̯��T�X�>�Z@˴�@�ȳb�X�@�f�4��l��$�2V��٦�`x��]y$뜠(�v���� �MOK#I��G7úd�v�0�@J2������GQh�������V�l���t8d&�D��:�3�Q_]������W��l��	�л�r�(���W6�A�3����������K 9B���LHd��ZO���곾��}�u��p�=��FX}܃5o�b�F�����ț�Jg��	�`r�������4Y�EN�8B�GH��M�����T=��<�:Rj������?#ʹ���D�8�1a�^xV��/��������6٤�d��B�e���jk���+��2�ڸ�R*Z)8�3vC���&��)9�`Z$=��5<�X�a�C\�������cE�+�u�Hѫ��f�V=7L3���do���ÔE�Vq��}L����dI�I^�χE��Ǌ���{��g�#||� �een�;�&�V�B�E�����r�_�5��n3��oNBWhVy��%A.]kks�K�3hmg��JpT�y��Ζ�?}�#.��i@;����u\�$�Y�d�x���g[����T�~)��ƨK5߆���H��ɇ���Ds�O��Ya$J9��+�^����/�K��֚B	���:�Cp �'� NXEH��z�	&1� �b��$�x��ʤ:�Ӯ1�6X�ʀIj�K����9�.#d˲��0�,�o� ���I 0��D��r1�M:�F��?�ǵZR�d��/<H0�Y�\��NY���,�B'@K�) dVd�#'s(3m���n���xx�S�oQ��t�J���W���_Aއ޿p L)�a��T���)8'3K)d�*Z/��	�0��s�ZY<��q8#���B�L]&պ�����B5��Qf��^Ҁ/)װ�K�`ڡ��u c��?!�Sȅ�9���F������@�+TY��� ��y�UJ@@Ñ��S>Tx"������t~r`G�X^`(�cY��!�9�!�U��*��u	���|;+��y���1�w���
~gA�]��E�]�D���v�&P[G{k8���ׄ����DAJ0�0gTn�d�r�)�:R	��~h���5��@`���UV�ZV�$t���x藑Gh?�D�EN��Y�ƥ��^�����Q�(�i"�fx� o��U22w5�����@�ץ�p����/������)K�ƃ�(�8����`����=��"-:�ޟ�%��Z�g^�u!_���x�P#�)4Q�?�	�Z�t��.��'Lg&p���F�E���C'�J�z�6ؖ���'�Z�A�Е��@ű'3B1�Yt'�l���N����/ߌ�
5�я�W�!�`I�.߂�M���� ��ǋ��3�EsjnJ�������9Ղg�vRFn.��5L.=:gv]7	��M�Cy9�.�T���y��8k^N���'9�g'K�৯t�Og}�������H��!�xQОA��^�/&烶��9������Q���G�v.�k?�c�� u	��NE�:����e{#Kc�̸���?��������e�g�@D�E���(���_�j��X����3�qT�b��A��[X5�D�o����S� �`�P8{ǳcW�I������eu0��X�?dBncdBG�����r� ��� �At��Q`�AT��� +u�+�e��}��"�Y    7E@��$���-	/���bI���ikp��>�t�o:�+��7��|���l�W���y�FժCM#t��A;��h�d���b���9�3ŋ�f��ѥj�������77�0�&r����2�FAN���H`�5V���u[�2k��_��{���ކ����R,���3�
�;��ד������C922��PV��h�� �ǽ�Ը��F�B5�LB����}	�h�-;1\n��'  �%�4��l�x��j�����;��Y�m�W`@�CU���D��!r�@@�E��[�Av�K�p� 
�'�Jw���Ʊj���gGeD$>>���Ӈob2e
M������&���"���k��[��[@Ah�%څcuö���,8�-n������O0�:D��}�^��%�Tr!ed:�bŴ�>��n5[�zR)��jF� ͨ������{`Q#$�,�p�I�y�8ha����I�� ��2�K��.���q��v1!Jd�;Id���Adi��T�/�ͨ�4P��ab��f_�k=}H��I�V��"�"�h�m���m7Z�s����.�`i�'p�T8T'��O:�Bi�7uy�1?��t�����//��O���(��� ���{��*˘�.c6ݒ�^gu聨��5����%�gC��tS��)E����Nf	b^�:X_��[.�� p&Ȣ,˄���	�.ZN8_��Cu�����H-|k�A�-ٗ������b�X ,�$�C��HeWQm�j�ye��=�C��������j⼮����eV�̬��?��3�ȡ\X�-�o�<�-y1�Ϫ'�X(%��dH��t�/W�����Yc|y���4'�ρDq�H��4܅,��W�*�u�,#l6���tZ���G�Y�����%���\���h�=ѥ��N~���b����R���6����g�����U�[���xIt����?!Ga�E`��� αƑ4�@ ��d'��IS�*:#5�e��z������<YYb�p��H�>����7+���hq���j!�1�VZ�Q�j�R���|��6F�	����[vATW��� @�i����۴7	�P��e�܎�e�Ɣ\�j'�f�.���-�h�hW��fc��\g�˰�λH�e���+B��f+�0G�B��[�I���Y5f��{���{��1	S yk�,ϖ��qm���ׄw2�+�=���!b'Ȋw"J��sA:0���9)�"�x���a�֐��{mN�L0�1e�R�����_Q��S�
�㥫�3ۑAxX�EB�����)�nl,�}C�/5��F~�<��6Ffq&�xW��|ϲ2 � �c_|�P�AYY�1��}�?7�X�g�R����}6I��)�n��H�v��)����'f-K<R� m7�&Д���?-�n�����(C��U��J�n���iߡЂ�� +}I��B����y�.�͠ ��pN�	"xF.�c����Yע��j<w���J���v��%���Tt�٥��o��e��Q��:�3�K�u1� �J���Li�3�oV��Any�W`juУ�Z�\g�t��h��K��5�}w��e��8��OHL Vj��D����؍g���5o?��GBk��P\���{���l"����=�G�(Ҕ� A&�f@iHS.�S�� 6�ـ��<�p� ��S�5Boxk'�6	� ��v!i-t�@�k���Ӵb�N�X��M(-	����]������,�C��� �gyQ�\�CP��iP����Z
�kA}(@9L��BUt���H��K��Q��@q�ȁ��y�2*�$�r#��l-����;s>�$��-���u�3R�L.j�� Y��h
pq]^��YLܾ�� �b*60+�_Σ��3zr�J󃪬\L���H�Ar�$OȾ���MB/�M�*�Ac�<w�� �KN+# �5ڔ��|��'kS�p���A���!�����Ep<u�TVZ�{'�	9��ӨP]�_-+<[v�G��4Lw�g�
JGy��e���WB�p8���7V��K�������}��d�I	t�z��m���6��Qr�������h��ꡋ�{я噼�[�s�q6�>�)�LP��d`�,Z��+�|�	�K�������Mx�:�8��p��������� u=����g+,s�<�A��&X�V�%A �wݓ8L�����@�8�S��l��f��}�,_�3]�{*� ���h@���([����U�k1�b��*r���&^V��Y��J*��yn���<#!�x��=6���0�������.�LLkt���3�lŏ���gSE��B?�'YiA n�� ��"�[y�	{ۭ������b	�c��1�1�z��[$9�>4]���ȡ��
W�2n̛�ՐdܨL�'��Y��ݪΊ���e�;�~hT}��)���q%�å�{��
�.,͊,%���[�'�mX�[��ԷtM�`�����.�N&�=�ja���8��ȱ�qwO��������ʫ�ۉZ�ΝO���]�G������0@~���c��8��ncZ�S� r�%��Q	5֫��5M���5^H�K�,�cL}�q�� �ǫ�����?���Ќ��W̠ ]$��:�eN`1�EDBSB���K~�Xݸ���=���`�R��A�a̓
�+����uʗ�2i�h0�ޓx�k^t0��÷�
WF���P�����0�Å�朼������lP��	O�<-}R�ZA[��4쌤tB�dg��^#�j��}��Ze������k)�װ�n2����tv�Q������`���bD�b�ݨ�>�O�mU5���T:T!K�[n���$���p�e�I�D��K^_X}�ߪ�'����C������u�	��Ӗ����g���
/�������-FVV� ��])������ m��8�u��cͯ�9D&lQ��
��L9�!�ݠ.���ζ��/�x���)\ۥ�͵5Y��A� Af-W$)zF�P,��:�fu�`��Ě>�KH9��Ճ��Y E-��7����2L?�E��$���ahIfX�xk��Y�2�:j��AU����Jl�1��F*}����`ka�����w����G_�r���N�8܎J��kp?p{`
�C	�DU��9q�5�3�Jp<�c�j�x��9�Cd���k׆�I5���z x�����h�mgǂy<���A[�Rm��y�cXs����a��fE��3� 1<�V78�cm$�j�s�F�tF8ɒ`nx���%�\�|uC��n�=S�����/J{�V<�&l솼[�7�����GG�|+���Cd@�������tF>���Q��eDB'6��>R8�������|֟jm/�i�%���!<��g��,,�F*~�f�9KެTZ�R�u�(� ��
u�=��#y���2����)��|�6cxB�Q����#%��~�2�U����Z�S�n�s�?�"�ҦO��E�$�gybT���v���;��jƯ�H���J�0D68��.��E�$��k��oʤ/Y�`���|3+��p��+S6��-jW�����_��`�*��+I�@a=�F�ŧ�<+
/�}{"I���]9�/� LԚ�y�k&�j0
�O������@Mpbɳ&�#R�n�B�A�-���E�p&8/^<�Oѐ�2`����@��)��� ʳh�W���
,����5k�kKE�8���i��o�����yx�f��������Jp8)S�$��? 	�;�]0�SI�]�Ʀ|�7���q*���6F^ۧ<�����S�;C�jUfeI"���2b�jo���QJ�Tg6Dw�q�bma{8 �B��(Q�S�ܴ��9x>G�9�!	2(�K�L��z���a�^+�6`�Q�9|��{"�t������-��3�/���J1��`��n?����|"�ʀ��6�a\H��Gr%O!ӭ�z�@׺�|:-�d��P�ɱ6����=��B�mM��ډ��62�d��    0룡�	]+�Zs�`AS#��\�i2�u��e�����w;�صbzTq��v���ʦ���+.�bY�Y��E��H�����8�'g�)+�_��Q���Ȫ#��n�۹)j^`a�+�����?��^�Vg^���Zk4,kW;��Z���c��O�ˎNuN������^@{{پe�ĺ�=�&<θ�� �(�ӲH�v�*����JU-�-�U��B��j�X���N�g�]��i��?[A4|n��n�)�+��~	�
�\Gk��5ov0n�� ��*'����(��^����s�����K��	`�A�9L�E;��g�U����4*ܦY��%��Guf�Y:qm`����gq.�� M86{-��wF�hR�
e�K��R�f��1�c���M�a���#	���I�/+���"��sW6��J��48���&t�U���3��K����Zz�ixC���.�H�Gp��,;�d�t��B-�IE�pC�����+�|�궻�����!>��ax��
����>��#�~B�7\M��L~2#�l	���!Շ1R�����)Q�����؂ ^p�T@�#�(�8�,�ۣ9�ꗁ��H���J;'�'��椝����2f)����r��G�.��x$+�"{^��Zm�P�J�e�gfY�T�|��V�����"��|�����,����@8JI�%��8i�Ө)e��>FT�M��rR�L�K7[à�8�x�k�y��*��kp�zr	M&�ui���ک&�1��wz=z=([7WӃ�fBK ���i�Z���r=��[��-��@ܵ��$���S���8�C �jd����?Yܡ��Y�W�i����R���ƹ��u���C�ȴ��ޅ���B��	�}©�L`�-�������8�㞭��c9����ls�(oM�Y@*ABؕ���l���d	�?�޺}��K`��ݼ䟞�U��!������K4����e͔������v�U;���|��2B�Pe�����4��B�^&�?Ѽ�(4ZF�5�~�PF|j8W�!�ϩF�V�� �{�@��]	��{U�OK�\�w����ɬ��Ϧ�ŝ�s�_F�We4������Y7>1g8B��"�$%��I�	�c+P->�͆��y�r��t�*�t�*}{�ñ�!�z�f��ʩ��Հ����E��<G	i_���oGz���+�3��f�A�s���\4m��@w� e����G-�7��o�z�ى��@��8�:�̐��d;'ǋo��B��:��� /��ٕ�F��Gh#��G�4��mp��!$�0�5t�Jwu�/���i��8G�0�e�������vq�|@@j�g�$ZO���+�c�5^seDMڣ)�N����Ц�!^���pRNS���O��z�S�	�=<�eHt綰`�7��6��VP
5���`�e81v�-קҮ����o+�,��0�fr~��F� �[ݤa�ͳ��CG<�r2�g���6��!��G�&0�p��!��Fe�ed:	U��L����� ���R�ܪޥ�0�-��^΃I��x��7e����4~�YsJEŝ)÷R�o�e������)�9BJ�[-8m�N�P�w�~��+Z��äS�$��M���i�L�"���=��c�CR'�DM���1##C"��uV�y��oE�7�������Nr�Qm��p��v�G�b�0a�&�Do�Z��c�����:�>Hg���ʴ{t�L ����(����3���_;�N�
ݍ{p����v%{vn[�D��������"Q#�Ŗ]XO������NE��I|���@�����7Ȧp���op�O~u��P��<����*��N�W��\ޏ�e ՙ|�}.�U�CdY�Z���U��8�S@h��b���Yb�ٓ�)S]�Q?��GH}&��]F�*$�;3Z�����2��w}R�aZmګA'�n]c^�>ө�	�Xҿ���?���6&�@FF=F�%H40?[ 4�Z�د-���̠S���S-7tH��"�~��Z���B�_Nx�>t��h�!��{�M�pW(�#�6�U��}�.Z+�w�
�=� {�z�7��ԥ;#�z���]�+�~j�H%�J���� #Q�Ǝh�Ī.F�6�+c��ё�U�S�Sh��)w�r�V�:�Au#gm���H��x��U��A���k}}W����Z�Q���qt�7���΁����k4yl�Vϼ�,vag{F6}a��,P<��΅���S�
��:7���輰
���a�pI��!�s����q"�*8��ЄvtJs�U�Ȱ��D;�AP��+wb�{!!f�
���dn�FޓP<�]M�=�FҵH�
�@3Ἁ�p�G��S;��e���m�F��[|1ͷDo�·�$ޜpS����<�^N�K�������IQя��[~x��� ��S�vr��X���ʽ#�:�um+|(��#�Ua�Qׅ��\ȁ���,?���-�E�Vw���ܰ�N6��ͫAs'|hEw"����=�$�OZi@b���Ē�!�kj�x.���G��1�մ�Α���ɑf�f(�Ŕ �/�ȱby�%%vH�/Ǐ_��=�eA��	R.�K�s�%��o�G;�R,�xӓ�3�dٌ��'��e���ҿ�S��s���=�0�o�K�b�n�\�#�'a�\1z?L�j8��Ҩ1^@��!ݗNmкTύ�_mi���٥_��խ���F6����+�͉��<�7;~Gq��jj�V��K�PJ���]����?V]Y�Sw���b���E�.�}��l��u��+>ea��P�����'kǬ*�8)_�)�ċp�$�l�k/�~/�m�QƁ5�a���S�P�x%+��S\����Ԕ��$�v7-c	ǹ6]YX�8.��l1�!�W�Ulݰ�[x���y"�������In������,C(��u֥����ҽZG���Iz��g����9T~�IFh�G��ýkZ�m�p�r�1�	�����*����ǕAE.#���>K�0r-�oCd9�!�����x�+r��Y���E�|��	AgϚ'un�.����h�d��V�A�t�s�v��Q0��M\���/�QZ�4O���*rM�쀿���p�/#3ht�.r��X>��<��#lñ<SO��D�"��/{19���f�����,>6��x���޹�^��fbeĊz��0[!�^��n���mNޑ�6.�Ʉ㧴��Gޱ繇�*�K���g��'b2���5O�x�9h�ǁ��[�W�����`H�i�[�$ڼXR���S��J��qb��o�-E��T簿��a��-�7k� �@�i���.ׅ�b���`��A�3 7�"�3�7�QT����ew]F��ZG�f���#u�>H6��|� X���v�4D�dFd�bU^�ũ�'g�U���+#���֩�&0�]u��֧W�a�]tz�yV�8�p�����	�H���Խ�\]�ٽ�t��<~�gM�@�
)�7��\E��0Q>#$]��f�Ǔ>�H��-s��U\���S��w�����e�6�j#�j �:�~ncD	-�h;�7~V�( mFQ�X���J�h���B��ݖ��헗��١{�Y�Ӭ��iB|���;3J�ë�)����*8���*�tt��t�Y��޹�7ˈw՚T�]��� Y���q���Y!e�v��;���K���s�g�*�%�[��u	�����{!'�,�
��#����b��iE2����ͩ�\)}縪�q�^)�^b�q�UG��e����J�g�Hn-
d�&$q����,��J�!��|	FpҮQ|H�%wTK�ć��ܛk����7���c��~�I��K\����f�<޵D�?�����|	+�����qY�BOa|��Vo���;a����Y	iQ�$B�y��J�j�Ͷ8\�9h����K�{xȎ�>����ο�}��ː�[�}������,Kh@ٰ;�ZՅf��@A-���G��;�Y2���&�� 	  ������%`�&���	Tl��nܨ�cX�}G���ܱ��ಌ��v������R��C��+>�Ns`���3�ܸ�C;(|��Ȅ#"�eh�+	�a�y���GTۍ�䩂�k��} ��M
�V�qҎ14-�4A$�a{���t����Q����!�y"���F�)�X�ܐ;�� 0����K�z�6�L�vT����w�6@��?�:5�Wާ�|����^5 �Bip�y۹9J�:D{9*��ȿ+��f��AY�/���?q�}�,Ҙ�$	�f@��a���Y�u��pO��Pu�����9?>/#�R#|.�cX�gY�Yh���b������Mk*t���?���>��]>��Ȋ�%�@�1qb'��X�"�Ѹl�P��%�;�h�M��h�(A��/Mmo�A�kr
���UA�4H���#F���@ުđ�ǩ[�o��Av��#.ܮ8��z�����R+|l�t"�X������i�b$	�J�i�a��5�삥�L�Y�U
�aإT'I�f:�e�]����q���D�}�8Jn�THϨ.�Suk�Ѷko��u����b������D51�@�����P@FV�D�8�Qlm	�ʺ���R�
�Ց���&$�a�޿}�d�	����]��e�0m怟m�ߌ�S�~C��[������Я������0Dt�_�������o�����v���3L��=A�j� �F���ז_u��E��
�&>SZ~Hg�U}`�T�6��Ԩ��]��4R̄v_�5�l��>���x�E7�y�*�rqW�uv�ކ��|��p�]_B�g{��!���f����ۚ;|��}�4��)��)x��jZ�Se�u�(�*��{���\+,�� ��MKN�R}>��]Kf�C���eD`b�);��ך'�Rt�M��8P��Ȳ �IB˖p�)���f('خ�a].?��[	�
�/���6�w��`�����_�_A�<�"g��PL[#d����B�D��'QQ֌\F���U�����.�;4���!��|e����	Yd�����T~r�g z�� �!�ֺ����_� O��y!���y��6��c�e��g��[<YN<�í�����26]G��YehOU��ar���7"M_�\��+���B��R��f%�i13�3���\Mk��e�ۿiYF����>�KI/$����y��^���#P8�t��'`-�l���eǘ�ZF��~{����ڧmL�*}��S:L�=�۫k����F�6���r�K���L�nU��^�f=J;m��^�ȳ���uѬ���2�ۑ0���抢�Su��ҩ«^2U:
U	p�g㹽���v3Ѓ��s�D$�dB��Ơe6fۚ&�Fr�a
�y�R��3���!��&��ιx�:y�撀x ���ɞ����"��2��r^�j>�Rs�[��!��}�(�9o�0��s�#+�">���F&$�;����C߈w��@����p4���n��9:�χ6j������`8cD`K����m��.��B	�N;�B}�A�Q�&�3���'���1���<�p3��Ys��@>���ü�%^^O7I�"7s�,_�uV7H��p�8~��f��u8Ad�������W���8Q������N�ָ\ĺ?�y_�c�['w���\�YK���b�T��͎�k�08�j�})6��#5�o<��n�d���>�A⛸�;�<@��kc��p`ns�ۆ][u6T�N)m$��/��fS�sC�|D5�!���s���?��/
�O[7Y��ֹ�����Dh�6[�	I�2<���bm��V�^k3s��mr�!_����Bk7�U���u�ӄ:�v����Ʒ��9�S�B�৕����3�_�+�sJ�k��Ty��3���Dbq�m�-vi�Zۘ���H8r��J�2����E��1B}#�iy����M'��Ï�WK/ �:N������Zu6e�3�����;���1�Qǿs��=�9���O&@�d�� t�bQW��1^VE�s^I/��k���z垐5����i�$�ʓ�b[��y���u��4�ʭ��k���)���6�B�z0��:Li���2�ϙ<�l�>`�@Sm���k�*q���ޔ�K-��O����"�t��A�?����`�|�$���ДȈH���Uca4V�Ho����ެ�+�(��Ł�~#�)���/8�Wb%P�D�.V�[m������8�羑�a��n�R|3C�ํ�3�1���6����?�Ϝ Q��r�͝�CcRevճ߲eD{�ݯ�ӟ�?�:         �  x�}�]s�8���`{�;�> 3��8��n�i�&�igg2I�4��$�&�~����N=`�s<���}ur�������P^9�ɲˌgJ����p36ƨ`�?�ZJ�`C�(c�'���]�_` lz�`B�{�cl�n!�Il�lǢգ���-R`"Q��F��ƪm��7��]����@����H������O+��[v�eu�-�3�>l�C������3D��b� L�CL˄�G�q��/Z����Q]q��4)PQdb�D�a�F�w�6��@�᠌��=2��T�� �i�I<��!�Z���v;����N%��zڮ���S}qn	_Ǉ���{w;��nX�nT�k�Z�(��eB%k>����C[�a��E��݃��o�m�������'pŬa��eJK�D,!���j- K^�<AUE=8�8�YE˅JSF+U���6V���Ku�`����i��H��F㿥w�:%����mݵT���!�G'vn���gU^G?m�1.Ӵ�4�s����`�X���� <�)�X-
������L�\x�CA(�r(w���Ds8�Ͱ�n���q�g� f)�w�؂?E����9�����AF�?�~;�7�Ɯ|V�W��Õ�x�iuz~��t�>�?�]o���C����Ap||y����� @��%K#���p^�E�'�z.2�9JD.P��$�0�"c�ˊx2����4}�n��t���6�d�Pfwў�V��rhR`�x@�B>%h�k�'���������e������P��ՐYJ�������� �� q���PU�)�U�H&�46���V?�	�RS��A��)�4n;V�UƏ�yP���ux�����r�)��8�v��X;|cithҦ�1�����.����4�'C���!eJJ�E<{f���G���_�8�A         �  x��[�vܸ]_�Uv���cv-[�<�<>j�u2'�nq�&�=�*����w�O�%)��1s���ըB�^`g�fsm��E���,��2�d��<���ߔE}�' ���7vk�8K��"�ٻa�/� �������Z���� �K��3$Kq�v]k�@����8��ON�P6X��Z���:`�J��3$q���o[@¿?C2K�{��@@�70C2�Ī{n{H%^_��sq��8�}�}!ޚ��G�,�3$3%�wɭ��fHf�L�Ր���˨��j^_.�'�f���8;��dHf���F'epy6��ŗ������2hL�dF�h�aZ��Д�<��8#�??C2����l}���?Wy�����n�69?t���Đ��~~y!�*��bH�J�w������,ؐZ|v~�<��eU`O�!��&�dus	��!�Tb5��O�/F�W
���3�Ź��H� k�X�F�G��6g�LŐ,Rq��-8�5�!Yd�ܛo`����,�S���x28`�&((U���:`�����\��L�,�E���j�g�#�.�;͐,J���Z>����W�w���_��k�������?��_c;��#�&�H#ޭnր�Ob��Jŝ5��'o7��56�I��;�]���C7��f�!��W�J�(񀨉� ��*��{�-^T5N�3$����EQ������k�n��}���ړ!�J��n��<� ɐT��_�� ��8�3$U=%�1������j�:?p9��H��N���j����Ψ����R�!���4�AT~����i�ؽZ@RT�TO���:��%�c{Y@R+�y��=��D�ޤѳ\@RS��X����Y������ˣ Ì�I~G��(�u�?r��9�������ݹ?�@������~�In�q�Ll��e*���T|\�S�|b����e6մ��8'�#���O���qb1�.�m{P%N�,�Φ�����Y��#(��i�X��b�x�r���vo#)�yX�%nW7qB4�/ Y�b�h��[�MjH��ɸ-u�qR���!Y�bu�}Y
��+$�L\�C����|�\�=Z�u>��Y��[@���ַGA ��g������V`E
�DSJ�
���QHV��2樜x��UFS�10Q�+;<�1A2]�!Y5�(M<| ��L���+ѳh���d=u�~��C�����!Y�s��}�X�Z����H�����AS�M�������D{�$k-޷��>��x��060$kr����l�Օ8���Ŭ�^=C���V����kɺ���yt���d�RM�{J*q�帲`H6�у��!�@�C
C���{o���u�:j��>��y�l]@�)�p�o��ʌ�P��eH6j�����'�;�7�!��ٿIn6��d3��0�[�;�T�9<�/�s8C���m�|���Ɇ�5���
;Zœ�47%�Kr��ȣ�D�(v>��G{��Ħ䰓����T�Ŧ/��ϓGY:u7O����"u�Փ�`�I�S8�0DB����xT�/I^+Jqi��g'Ġ>�"1T[�Gӝ]�������")5�afQ��cbx;Hqy��h3аM��̲������Q�� �����'pU��0D�s��ß�*0D�q}�6N�C�Z����otp����;b�Q�� �P�Heu�� F��/C$�������K=�2����]�,`b]��K#>��4yx<X�0$�|*9G�P�!;dNi7}��
��3��9��L�.�"9S�|��\+��H��,��6�?
��"Z�߬�|$�Q<2��R\����9�p*,B*�+
��W'�s��-�V|s�Zߚ�}ۻq��nnވ��P��h�n�8��
G9�\���w�Be���9���s73��W���:~����
%n�Cro���$3�X�!��!���x�x08��R����]�>����J�*�����3�bL1=+RI5 E����$4����!�U�2�-�Rqav]<�(,T*�lr����k�@�{(�r�a�l7h��p�Q!�b��N�E�kWjWEQ��1`;X@X�Ū�u.Y�)m�䶱��S�ǳD�Jq��P�)�OfT%~~w�\��a4 M+<�d��,"���O���D����Շ/���g�`�p�V!X�t��>�W����BQ3��LE��	���x-��;;��?r]���Vbu��=�]��Ȯ{����kX	u��K��'Z��?.}2�h\��P��R��?�^1�͙4A3Dr����\R���Sw_g�zY�^-V�\���0�]a��4���3�`[��]��sB߃Gg�v1D2�W��c��3u�H �0y����2����|.ӓ�`�-�aS�;o��S��C$BO�P`HѡQ+��o;Дh����ה�����GY�K�h����1- �0��X����!�U��b�o(gh�����T�8?�t!�����T�X[o�vP���!�R��B����w`���ȓ!�����w��G����(-.���
�huI��<�9�&͛d���V��U�U��̹4.�t(�Z\PvxP��~`��H�����G��WSHfu*>���Go��t�'�:L@k���~�����.��\ܛ�?���t=M��~�v.��Z�����я�-�d�?Е�5�5kM]��)xS��Gz21�2V�2����s#xd�x���8����9��c�Y��ܺy��5YS=m�T��(KZUófM*�Tr���]��3�&��ow��%_L�u)�oA(d�\��e�)L���B�|�>���Dh�2������s����$�-����e���.ŏ��(]�Z��XSM�y 3�H���w����l�a2D���kf�
Z��xy�H>�� ��%1D��w���HV�O��\|Z�(��3D�qg�7�]�]<��������H)��=�      	     x����m�@EѵTE���3�d3��K��M%b���#+ �rQ/�k ���m!y9��"� �8)��#�~#0�"z���&�&�:�-X��4CΩ���t�!����7�bV��3��'�*��
����$�4n�ѓ8?��9��n�_m2=�u��AI*d�l�d�\��'q~����r8]�K�-�P�S:�G�$0�NAង���u4�#� ��B��[�ϔ6�t^��\���`N�!�z2���}�+�+q����Ǿ����            x������ � �     