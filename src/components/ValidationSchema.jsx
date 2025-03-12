import * as Yup from 'yup'
export const schema = Yup.object().shape({
    NO_ENTIDADE: Yup.string().min(3, "O nome da Entidade precisa ter pelo menos 3 caracteres").max(15, "O nome da Entidade pode ter até 15 caracteres").required("O Campo Entidade é obrigatório"),
    NO_UF: Yup.string().min(3, "O nome da Unidade Federativa precisa ter pelo menos 3 caracteres").max(15, "O nome da Unidade Federativa pode ter até 15 caracteres").required("O Campo Unidade Federativa(UF) é obrigatório"),
    NO_MUNICIPIO: Yup.string().min(3, "O nome do Municipio precisa ter pelo menos 3 caracteres").max(15, "O nome da Unidade Federativa pode ter até 15 caracteres").required("O Campo Município é obrigatório"),
    NO_MESORREGIAO: Yup.string().min(3, "O nome da Mesorregião precisa ter pelo menos 3 caracteres").max(15, "O nome da Mesorregião pode ter até 15 caracteres").required("O Campo Mesorregião é obrigatório"),
    NO_MICRORREGIAO: Yup.string().min(3, "O nome da Microrregião precisa ter pelo menos 3 caracteres").max(15, "O nome da Microrregião pode ter até 15 caracteres").required("O Campo Microrregião é obrigatório"),
    NO_REGIAO: Yup.string().min(3, "O nome da Região precisa ter pelo menos 3 caracteres").max(15, "O nome da Região pode ter até 15 caracteres").required("O Campo Região é obrigatório"),
    QT_MAT_BAS: Yup.number().min(1, "Matrícula precisa ter pelo menos 1 valor").required("O Campo Matrícula é obrigatório"),
})