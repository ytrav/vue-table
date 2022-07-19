<template>
    <summary>
        <table>
            <tbody>
                <tr>
                    <td><span class="high">Patient(in)</span></td>
                    <td id="info1">Teststationär, Mediconnect (22) * 01.01.2000</td>
                </tr>
                <tr>
                    <td><span class="high">Aufnahmestatus</span></td>
                    <td id="info2">Aufnahmestatus vom 28.03.2022</td>
                </tr>
                <tr>
                    <td><span class="high">Tel.Nr Angehörige</span></td>
                    <td id="info3">—</td>
                </tr>
                <tr>
                    <td><span class="high">Entlassdatum</span></td>
                    <td id="info4">01.02.2022</td>
                </tr>
                <tr>
                    <td><span class="high">Aufnahmediagnose</span></td>
                    <td id="info5">—</td>
                </tr>
                <tr>
                    <td><span class="high">Betreuung/ Vorsorgevollmacht vorhanden</span></td>
                    <td id="info6">Vorhanden/bearbeiten</td>
                </tr>
            </tbody>
        </table>
        <table>
            <tbody>
                <tr>
                    <td><span class="high">Pat-Nr.</span></td>
                    <td id="info7">4100018028</td>
                </tr>
                <tr>
                    <td><span class="high">Fall-Nr.</span></td>
                    <td id="info8">0049026127</td>
                </tr>
                <tr>
                    <td><span class="high">Letzte 2 Arztbriefe</span></td>
                    <td id="info9">Arztbrief vom 18.05.2021 (KAR) Arztbrief vom 23.06.2020 (KAR)</td>
                </tr>
                <tr>
                    <td><span class="high">Allergien</span></td>
                    <td id="info10">—</td>
                </tr>
                <tr>
                    <td><span class="high">Nächste Termine</span></td>
                    <td id="info11">—</td>
                </tr>
                <tr>
                    <td><span class="high">Empfohlene Entlassart</span></td>
                    <td id="info12">EV ext.Verleg.</td>
                </tr>
            </tbody>
        </table>
    </summary>
</template>

<style lang="scss" scoped>
.high {
    font-family: Montserrat;
    font-weight: bold;
    margin: 0;
}



summary {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 15px;
    justify-content: space-around;
    align-content: center;
}

summary tbody {
    background-color: #f0fffd;
}

summary table:nth-child(1) tr:nth-child(1) td:nth-child(1) {
    border-radius: 10px 0 0 0 0;
}

summary table:nth-child(1) tr:nth-last-child(1) td:nth-child(1) {
    border-radius: 0 0 0 10px;
}

summary table:nth-child(2) tr:nth-child(1) td:nth-child(1) {
    border-radius: 10px 0 0 0;
}

summary table:nth-child(2) tr:nth-last-child(1) td:nth-last-child(1) {
    border-radius: 0 0 10px 0;
}

summary table:nth-child(2) tr:nth-child(1) td:nth-last-child(1) {
    border-radius: 0 10px 0 0;
}

table:nth-child(1) tr:nth-child(1) td:nth-child(1) {
    border-radius: 10px 0 0 0;
}

table:nth-child(1) tr:nth-child(1) td:nth-last-child(1) {
    border-radius: 0 10px 0 0;
}

summary table,
summary tr {
    margin: 0;
    padding: 0;
}

summary table {
    width: 50%;
}

@media only screen and (max-width: 768px) {
    table {
        padding: 0;
        width: 100%;
    }
    summary {
        flex-direction: column;
        justify-content: center;
        align-content: stretch;
        overflow-x: auto;
        margin: 15px 0 15px 0;
    }

    summary table {
        width: auto;
    }

    summary table:nth-child(1) tr:nth-child(1) td:nth-child(1) {
        border-radius: 10px 0 0 0 0;
    }

    summary table:nth-child(1) tr:nth-last-child(1) td {
        border-radius: 0 !important;
    }

    summary table:nth-child(2) tr:nth-child(1) td {
        border-radius: 0 !important;
    }

    summary table:nth-child(2) tr:nth-last-child(1) td:nth-last-child(1) {
        border-radius: 0 0 10px 0;
    }

    summary td {
        width: 50% !important;
    }
}

@media only screen and (max-width: 432px) {
    table:nth-child(1) tr:nth-child(6) span {
        word-break: break-word;
    }
}
@media only screen and (max-width: 410px) {
    summary td {
        width: 50%;
    }
}

@media only screen and (max-width: 385px) {
    span {
        font-size: 0.8em;
    }
    * {
        margin: 0;
        padding: 0;
    }
}
</style>