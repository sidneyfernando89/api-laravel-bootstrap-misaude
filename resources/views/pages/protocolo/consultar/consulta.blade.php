<x-base-layout>

    {{ theme()->getView('pages/protocolo/_navbar', array('class' => 'mb-5 mb-xl-10')) }}

    <!--begin::details View-->
        <div class="card mb-5 mb-xl-10">
            <!--begin::Card header-->
            <div class="card-header cursor-pointer">
                <!--begin::Card title-->
                <div class="card-title m-0">
                    <h3 class="fw-bolder m-0">Protocolos Registrados</h3>
                </div>
                <!--end::Card title-->

                <!--begin::Action-->
                <a href="" class="btn btn-primary align-self-center">Novo Procolo</a>
                <!--end::Action-->
            </div>
            <!--begin::Card header-->

            <!--begin::Card body-->
            <div class="card-body p-9">
                <!--begin::Row-->
                <div class="row mb-7">
                    <!--begin::Label-->
                    <label class="col-lg-4 fw-bold text-muted">Numero Protocolo</label>
                    <!--end::Label-->
                    <input type="text" class="form-control" placeholder="PROT2021A123456789PT"/>

                    <!--begin::Label-->
                    <label class="col-lg-4 fw-bold text-muted">Situação</label>
                    <!--end::Label-->
                    <select class="form-select">
                        <option>Selecione</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>

                </div>

                <a href="#" class="btn btn-primary">Pesquisar</a>
                <div class="separator my-10"></div>
                <div class="row mb-7">

                    <h3 class="fw-bolder m-1">Resultados</h3>

                    <table class="table table-striped gy-7 gs-7">
                        <thead>
                        <tr class="fw-bold fs-6 text-gray-800 border-bottom border-gray-200">
                            <th>#</th>
                            <th>Protocolo</th>
                            <th>Situação</th>
                            <th>Ações</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>PROT2021A123456789PT</td>
                            <td>Aguardando aprovação</td>
                            <td><a href="#" class="btn btn-primary"><i class="fas fa-eye"></i></a></td>

                        </tr>
                        <tr>
                            <td>2</td>
                            <td>PROT2021A123456789PT</td>
                            <td>Aguardando aprovação</td>
                            <td></td>

                        </tr>

                        <tr>
                            <td>3</td>
                            <td>PROT2021A123456789PT</td>
                            <td>Aguardando aprovação</td>
                            <td></td>

                        </tr>
                        </tbody>
                    </table>
                    <ul class="pagination">
                        <li class="page-item previous disabled"><a href="#" class="page-link"><i class="previous"></i></a></li>
                        <li class="page-item "><a href="#" class="page-link">1</a></li>
                        <li class="page-item active"><a href="#" class="page-link">2</a></li>
                        <li class="page-item "><a href="#" class="page-link">3</a></li>
                        <li class="page-item "><a href="#" class="page-link">4</a></li>
                        <li class="page-item "><a href="#" class="page-link">5</a></li>
                        <li class="page-item "><a href="#" class="page-link">6</a></li>
                        <li class="page-item next"><a href="#"  class="page-link"><i class="next"></i></a></li>
                    </ul>
                </div>

            </div>
            <!--end::Card body-->
        </div>
        <!--end::details View-->



</x-base-layout>
