class PromoCard extends HTMLElement{
    constructor(){
        super();
        this.shadow = this.attachShadow({mode:'open'});
        this.nome = 'Nome do Produto'
        this.image = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFhUXGBoYGBcYFx8ZHhoXGhcXGBgfGhoaHiggGB0lHRcVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGzIlICYvLS0vLy0tLS0vLS0tLS0tLS0tLS0tLS0tLS0vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAK4BIgMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAFBgMEBwIAAQj/xAA9EAABAwIEBAQEBAUEAQUBAAABAgMRACEEBRIxBkFRYRMicYEyQpGhB1Kx0RQjweHwFWJy8UMWM1OCkhf/xAAaAQADAQEBAQAAAAAAAAAAAAACAwQBBQAG/8QANREAAQMCBAMHAwQCAgMAAAAAAQACEQMhBBIxQVFh8BMicYGRobEUwdEFMuHxI1JCYoKSov/aAAwDAQACEQMRAD8A0nD5apZmI7mi2GylCbm57/tRECvE0hmGY3mmurOK+JQBtXxaJqB/EgCEkTQr/WChYDkXMCKVWxtGiQHb2sJHnC9ToPfojC20jcVGvEJTsKrPY4AmfahmbYtBAOqOtLq4xrQcmqZToFzgCiqsaTtVfMcUtKNSQVXuBQXLc2SuQgkxbaiRxoCQFG9ROxReMpJEjXgVQaGRwsqycaHQdNlDketQoxhSCV2I5VSwqWmVKedc8y1GBNh0ov8AxjTiIOkg2qZjmk95wDuteaoqMDD3QSOphQ4HNdaCoWHeqT2eJSYm3au82yxDbKlMqVIBOmZpDwbzqwSplYHcVtZ1SwnTW4TKFGlUkjROrGda1gNiO5owpJcTpUZpDYfiE6FWPKmrKkrN5IB2FHQqm8meuCzEUAy4sqeOyNapgCBQoZK4UqOk+XeP8vT5h3EoBUo2Aqpgs6bWNJGlSpMRym1MysgFxAJ216lYzF1gIAkBIp4eWQFtqnnFO7aJaTfzACoM0w5QFutm35R+tLT2eqQBqVfpSDU7NxYRt0QqHdpigCDMdQmJ3FSLNhTibAnlXOVZu4PK9pKp2HIUvKz4qFlR6VXZxhUYTc9aD6pwIyzPNe+ht3gmriLCnGIS0hWnzDzbxVXC8BFBGnEyO6P0g1FgcaptJbIlzVeOnKrrmcOIUmBbmT9ooziqcntmzx/CWO3ptyUnQ2+wM87hE8UVYZKQJVbcCqOB4pDhKRyq21j9cDf+9KOa5G4hxSkEwVE2tvWPeHHNTcQNOSHD0qb5bVHe2KbF4hLu6gfevraEJ51nTuDfSfKoz6058K4bS2PF8zhM+bp2qcsIfJN06vhmU6eYPkcEeW6QkaasNOqG6qGZ3g0Ow14hbKhKYMT1g1awWCDaQkqKo5k3NdJrqodAPvb01XLIYWg78I+6soxq9REW61eZdmk/HZuttzSlBVJtU+Gz3Soa0xNqGh+oVGO/yzE+iN+BcW5mjZNtQPYNCtxfrXDL+oSKhdx6kmNMgc5rqvxNENBfoVC2m+YGqqYrKyDPxD7/AN6C4/LErO0HqKbcJjEODyn1BsR7V9ewaFXIv1pT8K14zUz+E1td7DDlnWMwC0TFxUWEVKLGCOVPONycn4SD2NAsflQFog1G+k9n7grWYhrxCpDHn8n2r1cfwTv+TX2kyEUN5LQMQ9oSTBMDYUvrzkqGpfkBtpO9WHM5IBkC0z7Uo5thXsQvUCnSdhO1MxWM7YAUyY3tHul4TCiT2sDn9vRc4/ihIWpKLkbHlNQ5JmReWPEBKtVv6VFgOGD4nmv3imPD4JLSyUiOUVGyk2ncLrVX0GNLKdyRqrn8F4itK3IJ2CY/rUGc8OeTxGSVKSPhUd/Q8jXGY4ttlbSnCApRIECSLX25dTR9nEpUjymZFiKsp0qbg4ObfY78fZcl1WpTLXMPlFv6KyjD8UOIcKfDIgwYj0vTC42paQ5rgnYGosVwsUOKWkBRKiYNjczVnEZcrRLqtMbJTUFUkOki/jv6rpl9IkGmR9/CNVO4pptnSqFE8zf6UGddIBLYJAPIVzicvcegN6oG82ogMC83p0b8xyjvSXvpvIzkR16+UrzR2e9zxRzJgpSAtXwkVO8lM6QN+1UWc0bSkJJj/aEnftRNDZMGNE7ahE04lmUMoiefVgPFQOa4OzPELlOAQNwK+Oraa51Uxge2kJ9RUDWkyD/MUNyOVRfUBtg2PHUcoRNpzcn0XPEGP0tyD/1SLl/EetxJBIAJEUx8UZEvEpCQdKOd70IZ4FJEIVB5VWH0nk5z3jty4qyg5lNkHRNOB4gbMJJmd6p47IVPuS2i3e0VX4e4UcYcSp4hQBkwbe80zrzNSyoMiQJHl6imQ2IcSYMAAXPH7JReKb81Dhck2CHYbgsD41J9Af7VdRkbbQumO8zS+/mmJ1FRw74GrTPhqufTcDvtTPk7zryRrQpMCZIsenvQmi17srabp5mR58vMeKCs+sG5nVARyIVHNkoSkqSASd+poU6HVhClIhBIAIvz51JneHcbdV0PmHQz0+9qFv5+tCYPlG2/Olu7ziHi+kDrqyoosOQFsHeSnTBYVtFxE/mNdY4BxJAPuKU8KHrLUYSTuTTWkeRNgAByt9ac9/aUy2IAvHXyo6rMjgc0lAm8ChHncUsQdjzqJnO/OryKgfD6USzUFaDoTrPIdKX8Ni3EK84SAoREbGp6cOmT5wq2A1GkkSeE/CkxXEIUYUDKTKSdwe1H8nz3xG9TsAp3PIjr2pCzppZUfL5D83Ki+QSEw4jU2bG8T71VTe9gAm3Ph4o62FpOp5gL8j7eKZ81xaVFJRBBv/hpXz3MCASBImD/AN0byfAI1KOrUibDkO1EMdkP8QkIkIQBvHPl7U8u7Y29lPRfSw7wHaDj1dIqeMnEAJTt60RwHGk2KakwuQJwzpD2gzJCgCsFIPNIEpMGYvsbmKoZtgG0OL0KQooCFrCLwhZISY5Ax9x1pNTDAjTj7fhdEVMFVdkDddDxlHcfnSygKwwIUO1NPDGbLea/nJ0rFuk0tZBjGQiBcjnTDiEgpkdPYUOGxL8OTF4uR7dQuVjKbCOzLIvZ26YaieZSoQoTQnKc2BGlRMjrvRhCwRIvX0FDFUcQ2WGeS41Sk+k6CqX+ljr9q9RCvVv0tL/Ve7V/FJObcPuqQpU35hCiZHoQKjy3CBhKSsxIii2RZqHEST5hvXbyE7LiOsWjlvzrhuDOza6nodZvHV11jVqgmnU24W/KAZk8rxGy25pAJKr2IjnUy80VISElXObQb969mLQVpCPMZkTsfoNqF5pg8QVT5QB+Xl+1JzPad4VDGseADA11VnMc28WW0IBciACLg7/0q5gHcQgJUtogAAEC9yJtFLzHD7shZXB/MN/870w4DO0tFTDqpVHwqkhQINtRteDatY7M+Xk+PD7ra7GNbFKHcdfZFm3Q4QqQCRMHodjXWLWhIk8uVUU4pD6EFoFK2j5m1WUEkbpn4k9FC1jzEV5eIQ5EQpIN4PPoYrMZU7Ozt4gxMzayjY2b3gajgvrOPQ5PhzPcVE/iAmAQSPmVUzbTZVqCIi28VHiMYhEkpBVyB6da5NYNfUDXEeh+B7qgBs91p8N/VWsBiWgpM2K5CCB0BJvyMA/Sr7kFSJkxtab/ANKTnMb5Qu2smZHL22AAqFvispIAUFAzcXFu4rsUawpUxTLZGth5364cIQHBve6W6po4rx7LSApySRYJSPMoxYQP8tVPL0S2HJ0lUeUDrtUOG4nQY1b96kfzBLoUpI0gD4xbzT5R3E70Nc0cS4u3I5jbcjYc1jaNSkMpBjjt4Kf0BURv0+9DWUP+LJTpvuY27QasYArvqUD0It9udVM6ZfWAUqNtkixJ71xGsYHECB7gXjbfxVNP92WRfip88zXSiBMztH19a9w/mgQ3qJ3vtEetRt4JhGn+JXrdVcN6oQFC8Ei6o58u1FktMuN+dpOnkEjTI/8ArBjtzrtUKXYmc3ejxjxiw4W5BIe9mTIG2m54+E6qm5xKJ+JJSJn05bbVE3niUEeaEzYTbsK6cyplaPLhS0R8JADU7hM6AQR63HTlSs1kT3iKDiknQYiDuDIIn/L1j31G3c4+YvPDn6kGEyjToPBkRx+OrBOmOWTClkLUoTpTEAcgDz7+tARlzLzoBSRF4I2NXsCpak+GpakEAXgG3QKIi/a9WUOJagJhR5/0qCrU/wApqsmTrrG2hm862AheYTTGTfry61VlnCgW1WF4irrTRIuRG1hy+tRNkbkCumEAkgKA6xI+9FgqjnVchje2Y6bfJsL+ylqGR/CovEIU5qUlLZADZSIVqAOuQB5jO3/E2qqWWy2lS40rFlFJBP2saNYjBkn5xt5hChv0sRPpFT4weUCCBIJOkqsOkbesV0K2CqVAZERoRv48ra66HZYyvkI5pacWygJQEqUk7kiQPrVl9tlQ8MAADoCIPqNvejeYKK2T4Vxzgj4ecCl/D4Q/ApS1IsSVJ0md4kXKaVXw/YkR6xGthHePmdjCeysHjNcEc/fx+V8wiBh1JUklTarTHwr5T2N79Y60X/1NJ0woQR5gN5tNx2kf9UCfzRKXAhaSEJN1RIPIDSkk95iuPBw5dUtB8MmARp0yJsYMQb9OVHhnOpsJzD1nnOvl5IqlE1DmeD4oy4MIVEqZBWoibySeUkkelD2+G8vGKWtKAHlWUgqJ3H5QbAiJG21W3sEMOC94avKLKJkibbTbfeBS008XnQEtysmR5eexMntaacar6boe2SdgALeQvfbTisp0jUaSx5gbkyJ9TEevgiOMw7OFfQhKVBC7gcwqeRJuOxotjJKgmFC1ouPehPEOAWXWdSkkJTsne8AjVMHrsNzRLC5s2kJaCpKREn5unuL+tZWbnD2OF+HvEfHnvAJvJcxlQd4wZ146/EqXD5coXm/ajGDfKYG9QNOgiRzoNm2JdK4C9CRyG/qTvUuCd2JBZY+qlc11Yw5OHjp6ivUsIx4gecV9r6H6zw681H9KeavtY5oiDpvyMfpSxxstxtTXhBRBBhW4BBHLfY70lYbHOunSy2VL/wBo1R9qeMuwhW2kPIMg/O2raIgTEbCuW+vUcIePO9vGLX8V2fpGYVwe4zxb5cEMwGJTh9KnVqUtU2vASegN6PYB8uJVoJWnkTaOxqHNMKhME3SSBA1JjsAi8es71bRi0obKUI0CLW3+tz70FR4Fpt8/34oKjg9ocG3Pprw5clbwrCB5lq1WgC4A62mgOcZQ25OiEXkqAvM6rnczHWh2YZ0EApCtMd9vrUvD+ftLQTJVuFWvPOR96FlbMILcreN9eaw4epT78ydv60UvD2blpXhuQdBtO97DTzIPSmTGZYgpVoCUBUGdEmf0NZbmr7q8SsNJUpCSQISRb0P69hThkz+JU0UuKIsU2UJHLfrSqjsrMrxmGwsS34MfhPxWGFqrSATqEwNNRaE9LD+g2qhiCFrslKxtYEx17E12rEp1JbW0tXl1BWkqSnTEalbA+5qdjCLJKioaTsEgpEfv3qJrGyMgmb8+F9vTxB3UgOWS49deCDnJgVSpzQFWCDAM8uf2FUVcLlJhCkC/wwAPW1NK0q1XbkDYgg8tx0tNQPsNr0woJCTcJSCqeXmPvaKfnpjuuOWOOnlMz5X5JrMQ+Zn2n4ul7H8LvBOptYBA5p1Ca6bwq0tnWZV+UyoAxv29KMusgp0lajJ/MUzPTT+giqbjZSNATCSnYFckiOQBHKluqB8BroB9fbytfciUxtV51MldZe6SUp0W2BABv26VdShKlGFqK03sYCegVH6VxkLCm0+KWydUICVTq+IgrkiUfEduQm1G/wDQWo8koJ6KURPUhRvVWG/TSSHtgnWDIjSI58dCFNXxDGuO20i/jPV/ZKDmUNrWXXDBFpG+kXgT8IPbrRXKnGWk/wDu6jve8DcQL/fvQvOFuNTCQVJURETAA3g/FyO3O1DS0tUqCSkbnUQCPUTO17xvXp7JosJHHb7jwI+U7KatnOgJsGeo17gcpPSruLwiVSQJ1czzkbiN/wC1JmGaKtMBMTcxK+gBOyE7mDv7UXdzZ3WkeHAFipwbgGIHOaVmBBFQzMEbAG8+0LH4Uhw7O2syeGi+5thlJTCVq0mBpgkgyPyQYv6V8wDOIKypZWkGRsItIsCqwrvFaUq1+a/QlRPaJt6dfSpRiVKhUuJFrHc33uDp7g0kVg1trX47i0xY+E8eNl4yW+O8fifvzVgOBCR4mmJtBg+4iKjTjgqVIIjkZ3HXb1qlmGLJJQYWmJKFR07Cb360OxWcNhKAhCUjaEkAC1o5e1qKgKciPgfbdebQc8SBr1oiis/jfkef2NUsRxQq8GhWNxhUm6SPagePeJItEcgN/aqRmJgOKsp4Vmrmorw1xavx32g4nSVgBKyrrK9MGIgrta9zN5Yf9WBUtTalG4hMTugK+ECZhSTB2mKQ8uwX80iEpKpOpXl7mSBEe9MmHSpJCpUAobls3J/KQJV6yZ/V9b9ltLRJ5Qfn86pTsK0OPE8jxt8Io5g0qKnXFunQCrSnZKY80pCSozHMkzaieG4bQgJcPiqJKVQV6QjmDAGonYEH6UD4ewGJaxPjLcBag6UlJSQINrmN4jsKZsdniUp3E7QTfe/KsoNot7zjfbh6Ea7fBU1WrXnIw25fx+UXeUFJKHNKkqsQoWPqKV8Rw0tqXEOI0JVqCTqmLHzKvqIuBbYDmSa4ecU9pcKiBIUB0QJgH1MH2FGMpxandSTcDfnb0qrOKgyuFzpx66N7CcNfQ7zT4jr514aoatk4glSXFT828ge0xPpa9BcdkK7qQlwqQrUlZOq0yAJ2i/KbmnENwpSUo0H8yU25bpB9b1E48lII1plO2ogACY2AAtyvNIk7mDeTHsJk8+Z0KdTxLmO7mlrfmPTwQHImn4UpwlF4hW53JN9p/rRfLwFKVrKFcvKqT6Hod6BqzVla3AFqWUpJG2iVXIEbm0CSR251ZyjGuuuFWlQ2BJsBAAEnZR7gXgdqU5jWtzgb+t79b7lNr03uzOcI9uY1umv+HY/Kn6GvVB/DufmP1P716ru1d/oP/X+Vysv/AH9yqeAy9OGbUW0oQ4v4tPI7wCef+chU2PxziEBerygAkR1ISL87mgzOKUlSVPeZtwwgmPKq5Ntxtv3qUZl5ihcEdJsRyvNxU9SoGmDIaRFibbz58f4VZpuJk3Ot99o8kYwTfjJKnEKSon/iRHcb/UiosZhTBTFhtz2qFrGK1G6oVNyYgdj0E770QU/A1AhQO0f060Nam2pTi9tTxHPjx3hK7zXSPIJNx3DPiE60oHSE/qRtUeC4dW0ZS4k9BBAHsTJ+1MiStajqA07jdKgr0Ftuc89qtKxAbRFh6kW+9c4kgEBx46T5cFb9XV/bryVDC4BCEkhABO+5nrudt6+YXDISSppAlRuAIn60UYwqj5lJEEclk+loihmGUUOKBUCUzATICR0KdR821+dG6hWDR2ndk+fHwEjy+6Q/NmvPui2H8yVNklKogqTBiemoEdbRQzO8veBSUaXEQQUrU5MxYykkb2jT7ih+YcQaJiBEmTt6mruR5+XWp8RJ20qHOQCNj3q5tWhUbkcJHH7Hj47m+sITSrUu+23JTLy5bbIU2CogeZCjtb5dyD2J50IezbV8TRB2tvPSQLc6PqzHSQmQZIBAG82HvMb2oPnuaFjzJSCqIBNxE9Nx/al4jDsmW22IE7eY/CPDOc52VzZJ0Mx6rjCJ8Xzui6TCbwU9Yo1hkrRZXh6ItYhe/wAxmIA9z2pRyPOvN5rqN+l5+/y1YzLiEkQB7zWUiyk3M5su00+6or4Wo6p2YsPhNWKzZpCSZHlHM/5FLGR8SPYvFQ2CMOEzrMedZPym/lCb2jcUEcxa1bm39KKYDMBEDSFTIWRJBkdCJG4350Xbvqnv2HXzx9ljsG2kyRcojxThVocCydQmQkFQKvoLkdKBYfGqfj+IDbUAwD1HISZ/w03Zjj23GfMbDZQmBAuCRsTIgHeq5ZbWxCCkBSRvC9hzBN/rSsTRYx5jQ3BvaZn333zTtCChXc1rZsRaeutjsqRwAWhJSS2QAUlOnfpAEEcj7+tRuB0uaJuPh0pU4rbfyyAI+lVnsyYab/8Ad/mCY1JIBAsRGk6o2O471fyPOE+AHQfjki+4k7Tsk7gdDQMZlh7+XON4B9IF447o3TprsNvPwX3E8NLUgOQHHeckog8lJQmBM9wRvMiK7wHDj6wQvEuBIEJCSVEdQouEknoqZqnmHFpaQVhKlxfSm57wOfWh2Y/ielpbaFtOnUJJSB5R3v5iOcbVVhnsqESCSPC+88jqk1W4hrSXRHwNh4eiJZ1w00y543hqWmNtSioblR1FXXTa1p3iBGUMka0gFabnUpSYHMLMW5fEOlMDGOTi29KVRYKsrSrbkd+3vS9jcShPkKFeImfMpSTZIJV5zAgAHvahrUs4DqZJB0E+vIxG4sjoPd+185hzOnPkq6kuOK0J0wPmupI5xvf7b0SR4fwkeIQJOlskD32Ty3Ncoc1wG0gyNRi0Cewg87GqWPWpsxp1FVydJVpMeWRBHT+0xUQpl1yIE8Y5anU/9byLwFVHaHLEHrr2vKkzJeHQRqBM3sEgG0pkCd4AtuSJoll+L1Ar0rSkfnUbeqQPL6wKqZVlbStLimip26taU6Y7TNvf6VYzLIk4g+ZCiU7JKylBO41BKoc99VVCmxwHnpfmBfhw3+Jqrg3uTpufSw68F8zR5ceUKNpCkny/refesvzfFYleMSUjSD5DvCgTYkEQCJP+GtAOQvob0tsISnbSF6fsiw5C1LuPy4qQsOMjULeRRJF/m3gHoqnUaZpkmLHjePt1snUmtjUEjgR/PXovjuaM4j+R4ySNilKjJ0EGLbi3pFNuXZ0jDpSQAZkqO6pnuYjes4wPDbjR1pagmTJuodRe4FHMlyd54hZOpANxJCbG4McuU96NxyOGR3rr11sj7Brqf+QjnGn9pxzHMiX0LU8EMFu41aSVTeBfUACk3Fp713nbSXEQkFxRgphakknTZRhQ1AqPwnULbE0HzbL1JbKAkJUlWoJD0gJNvzTuoWv5Yqo3lrx0alJ0wAkysEkKklKrwRe4uJ7Cje8MN4m0+Oh59RdKpYdrmhwdAvGmmo0PhuqLOVqS6pbytEmTdRVJPWQREkgzyFOOWZdqIgy2SVCVSZFhJ52vMnfehmEyHUol58rCr9dW8zO97/1O9N+XsttohsE+gmpC8VX9nmBvOt/5sixmJsMpk6WFvKYKseArqPp/evVX1YrklEcpQrbl89eqzIzgfdcfLzb15JGwvEZA0O/CZnVeSdwZ+xqvjXEwhXmIBtHMWMHTNx69LVQweXNPLSpxYBAICQTJPK2xv1FE05SGtOoeId4skDnyVPWwJ9KlcLXP8L6HLTY6Ig780YyrPXVlUNp8MjygAmT0gCehB61bwDBWlTqUqS5qi5F73uQVfXpQXL8auUJUFpvsUymJkRMqH+XooOIWEGNZJ2JkxPYEmBS3Vn3a6/D010t1YKR9Mgnsm+nDnxnijKEJKRrVrWkkExpM9IO/r2qDMMA2tOtSdREQkxuDaJsDtf8AeoS6661qBSkLNlhMEJ5yDMq6UUwTadASkW6qVc+tGMK6rUkgD1k89zx1KhLyzfrfhF1RwDygb7d6DcUKWh8KTcKQZAgSZAk8yQAOftTc5hQdhH9aDcQ5Ip1KfD+NJJv6fYbU1+Gc2mWi/r8J1Cuw1QXWGiQHX3VqMIUedpmP+HxfahuPzfEtAIbQSowBPMmNh70fzNeNALCHEAgmdBumbEwTMdgeXepmMuaIRrfMhJCi4LlXYaQUj1JmpwaTBNjGxt16hdMVS6xFuV1ST/GtgFzQqQlUkoCkAXUlJJNyLTAIk3m1EFutLcBXCUkeUAQCruo39hVxGRgpJbcUsmZKyFiSInYERyAMdarsZRoKEOqGpRglIBB22pdTECo0RtbSNernWyVSc2TJg8vxt1zXKMA06pTbLSVL3KkJ6d7AfWgOa5PiQpSEg+SCZtvsJi55RJHTnWotIDKAGG7c4sT3PWusdg0YlIlIKh7K9jvVVOgWA5TJ56H8qdv6gWuiO76nx5cuHNZ7guH3tP8AMc0jlYT/AHq9huGxMFTi1EEzpUEyO8lP1SaZcPkBQoK0JgfMQSoXPUxftRZbdhB2+9SubiWuM2tOgHUCb6r1XGA6GevP5QZjDIaSkOQBEaCZF+0WHYQO1E0tDSAIjkEwKo5slcpOnWJAVEW5i9dGSmFCJ5AlQHqalqWl7mz4mCeZN9YjWBdIIzAGeuQQXNsH51FaGCgGRKEeXqVG8n6VAvKQqSVaR229gL1XzjAq1LCAVKUbaTcQRa8CO1cNoclKXJkGLTI//JpocDFQ+m/Q6hXspwBlcJ5C+nuq2YLYZt5lrjqSBziBae9DcrQrEqICSOqdiZ6dbbim/B4BvVtqVG7osAd4m9EsuwobUVBptKrnUkQJJmwFwKpbVpH9xgoX1+zaQ0GeJPXsvjWCQ0w2EIhad1aJI2vqMRtyocrACPGK0KmZ1gixMkp6Ta0DrV99wPT/ADCJMKTNiDyFpj71cw2ElGjSFJ29uXtQuxwrVDTaDpz235+aka00hLtZv4eJQjKsLKoEuAySsIhA5kBRvz2Ft+e7C40kD4RA5Rz/AK/SoHHVMoCUgCVBI2Ak2AvX0Jdm6VKIuRP7gCmUsO13eLTmdrI/vRLqvL3STbxH8BD28YlDqUIbEL1aiBpKYum2ygTPORa0GiyIMeIqCen+WpczvN060LUNPhquRBAmxBUPa3IzQ5/N1LcK58ogpPfnWECiMjBPjN01uHdU72nunzF4OQnwjbYyr796C4ttouFGIQkqRGleygk/lVuB70ur44SxGvUZsIBP6VSzLOi8tD4IKFeXoQUmYPtTnOEdqxkO/wDkjgtoYWpnyOPnvPUptyvKkmUqSrUJ8ygII5WG/Leu1JLbavEKZF0BP0E6oHPntPKhi3HHG0qSdOkQVA7pG0x2tXsvbS78oUUpMKVqIvaPMYPXasBY6C0a78fbrVE6mbuedNbTHnoJ4eyqI4jbUgF1sap1FIMlIm1+tiRE1CvMvHAdYW4XUnShBSJRBF02kWkX3qrmRy/xNGp3xAoSUBERzA/tTLkIRBRh2SkfnUZJkf8AVbTaxjbfcquq1lJgeGH/AMoAjz28BJXeR4Yto8R0FTqtgem/Par4eeWoQm3MgkD2ozhMtCR5jqP6VZKAkWEVdQwbxdxjl+ea4dXFh7iYk9aclUDSvzH6mvVJ/EV6r8gU11jmc4NzDqSYCxEnSqPX1+29EsnxjroSUJWhJ6EyR6cqrtJeKY8MkDYKEj73AqyjxkRo8qjI0gxb1i01864tcbesn+tV9dUzFsOIny9bIzxAwoNKWlawqBcjWfYxb2oTlrrKtKilSBHmSkDUo2idQ5V3/G4howSBtY/5equY5qhKtR0Fe59PSsh885UXYgNvfgR+Ew/6sUoCADYWJHLl70HxubrK2yFkJQqTvf6VG1niXUpJUATuK4exCBsBRODtS5epU2jVqOZlxBiFsn+GWlLhiCRI+lGMhfdKEeMsKcA8ygIBPpSrluIbnzbU0YbEtNtKWi8AmKZTdVfq4RrzUmIpsYIa1R4rKmX3fFcQFL2B08gbSTUObZUhluWWgpU/MZF+szNEsDikqQHV+XULJ6CuHMY04ShKgeopb6ILDmIJPHgltqPBGsDxj2UXDeK8dCkOoCVix0/0rvEZJCwVOSkEFMpE22vUqUhF2k35+lWX8SFtztFUMYx1KXAZhw3QOe4PllgfZQNvlKjNWHVtquDCo3FLeKxUT+tBl452ZBkUp1fIIAkHjsnMwpfeYTK9xCWVQTMkAaldTE+lGyyy4oOfNESCR9pis1Ww8+sAEC9yRTxgMv0ISVKKiBBjavUn1HtgwW89vvxXsRQZSgh0HkpsfgjYpJjsd6hKNoBJn7VfZVHwkaZ+lfEOpSTHmJMzSamBp1CCwQPXThPPjtKSKjgIN+t0Jayop1FtSwVb3mOu4ojgMIBuZUBE8/e1W28VG8VJ/FIFwRVNPAU2uDy749kNTEVH2KGqwUqIWhRB2V5be29d+Gn4YGgCO9Wl5oCCKHLZSYVMKHffrSK1OkwxSvOs+OnOfdG1znfvt4Kuh1SVqRo3+AAD70bYZWlAkj2oblGNSXlpiDEyaHcV8ajBuoRoDgUbwYIHWqsJSp5M7TrIEdf0srZi7KGxYHxRfF5eFnSpIKSQVA9RsftRJD4B0jkKFsY1t5CVg94n9a6/iG0SQbmnM/xmQdeaU5pdYzPBS53lCHml6QA4QSCRYmOYrIsQy4lOkkhQkEHqDetiwuKBEzQDN32lmS2lUEgSJknehxWQtD9PdV4Cq6m4tIkfHrZZT4juykmOsUbw+XIVp0JWY3nmfQCi77aSQUiEJ+IK/QChmOzbw1gtApSTIIP1tUYeXiwhd1s1CA0X8beB+QnjJAG2xIF7EKHPlvQjivMlJnwzIiCkCw9FCqbfGbigAUIUdhI+/Y0RwOWtvEKUuCd07ifemF7WMyk29Op4LnigaNTtaw+/XjY8EpZZLriElMr2MJgAd+vrWuZBhPDSB26f1qxhkNtgAJG0TFTu4kAdBV1DC5XB5Omy5mOxxxHda2B4zupHXYFDncTrsDaqmKx2uw2/WrGEZgV0GjMeSgIyi+qsaa9U/h16nQlSqGKQbkpBoJj+HUPJ1Bam1RyNvpRfC4hxxRgDQLdzVlabRpr5hoBOe8X1G/GRddNlV9E90weXxdYznjz7CygnUBbURUeDxDj4gspV3AitSzHL0ughSPtQfD8PoQJUspSPlHP1rS9kW/C7VPH03MhzBPz6dc0pN8OEgHUARy3qpiMucRM/Sa03CtNBHihEAfU1xmeXtqbLui0SQbTQ99zu6ZtPkkDGZXQRvG2vBZngcG4o7EDqDRrN8A+zh1K8TSkDbrUbGbaHDAGiZCRXPFGZjENFBtPKiBaXCVRWZiCQIsiWTZ14jSUrjaK6KghWpNjSLk+I8FRAkpoo7m/egrUTNrrKdE/lOmHzRSratPU0YSdTelJn151muBxqlKF60fIjCAJBNFSaf2O0UmMpCkAQoFZX4gCVp0jqmr2DyptpOkCe6r1acc0jtXbToUJBmktcQYi/FSvqvc3khuJX4ZAS3rncC1EG3khMlKh/tqYgG9DsZiwkxN686tUpGGNmUIHaQI+V3jcQnSIMTyoecz0CK6cxiNN7npQN9xN5NE19WZsLdeCfTpAiHKzis0Udq5Ti3AJUCANzQxeYoTzFGMt4jaI0qAI6UbabHGXOT3Me1vdZKKt4hDaEzfXfX36VWfxSXQQDEfMetTYtpt5AvpSDIio8T4aG4JGkfWjrUmASNB7qZjtNc09f0l7FuLb8wVcHfqKG4jMmXyQ6nzciaLu4AOXSox0pexuSgSpO9SUXtBuY8F1mim8Q7X0RHC5o2hMJURFVcXxXBESe9V8v4cce3VpFW8Vwt4KCpfnQeY3p7RTJ4xsEUUWuhxkopkOYOPGRdI+ITFq7zp7W5IcGlOwBH3oAxi2Gmj4SiCT1qTCYlspNtRXuBc/anO7jIHXXBAaEP7QCBoLeuqJYrFoLMJOtU7R170v4jCLVAi52SKK5Tw1i1K8iYRNtVrU/5dw34cKV5ldelblcf2gnyWvxdHCWa4Gb9cFm/D/DD6lhRQogctv1rUsowIABUgJIogXUNjcCl/NuIUCyd6rZhg0h7zJ4bLj4rH1sYdICPY7FISPMRS+9jys6U7UFZLr55x1psyrKggd6tY0vvsoXZaQ4ley/BRc70YZYqRpiKsVVYaKMuLl8ivV9r1YsWY5XxY22gnVfp3ohlHFa3lR4dus1neNypSFeYbUZyfNA0mBvXzlTDup2aSvpMlGoCQJJWnJc5kgCq/gtk9ZoBl+cJcspVG2UNnY1vZCpBIFuKgc007LzziEQkbE7UQWoFsiAbbVRdwiYmocKper/AG1jW1KT+6LFC4NeOYWX59lGIS6tSEEJJOwoaEqIhaoPet8Q2lQggUPxvC7DgugVQcLUyiIPsV1qf66AA2o3zCxHA4ErWEj61Jicu0u6FmBT/iuAjr1IWU9Irn/0DqMrWSeZNTy+dD6dBWD9Rw+aQ60cLpVwyEsKAEGdjRRGbFlQVqt0p0wvBmGRcgqPVRmvmM4VaVEJt0rHUXjvEKJ36hQe69/EIHguJg4opUIHSiLmfMIAAFucUE4r4VLSPEakRuBS5gsC+pJJCo9DWOflF/5T6eEw1ZgqNdA4aXTvis9QLgwOQoTi8+gyLnsKUcSHQqFSB3pgTjWmmbJ1KjpNZN7H0TTgGUwLZpVhh7X5zaapZiOQvQZWMfcV5UKSOkGrqMHiVAaEKnnasyCdk51A0+9I8J+6GOYVOoKk77GjeWNslQUqx6VbPDDykjUmDziqiOFnEqus77CtNRu5XjUoPbGeD6oznTxKB4a4A5ClY49wHzKmnJHCzp06R5ecmiSeAmlQVEz2o6YfVuGqSni8LQblcZ8rrP1Zw4bAx2FEWsPiIClQEqrQ8Fwhh0X0gnvU2Y8PNuJAuI2ij+hqETlA90l/6vQkNY2BuYSU3l2JSBPw9RVl7CrcT4R1aaeMJhdKQk7C1fXltIF4FE7AuAkGFCf1El37R5fKTcBwFhFQVhU9ASPtTLg+GcOwmGm0pPWJP1ofj+JGWzYz6UCx3HKrhNqppim0QRJQVH4qtq4xwJTY+8W/iWBQfGcYBIITc9aSn83eeMXM0Vynhh12CqwpzGPP7UBp02CXlR4jOHXVWkk0Syjh1bhCnKacp4bbbAtejzTAFUsoBt3Kapi5swIdl2VJQLCiaGwKkqhmGZtMplagB3NPUl3FXjQvN88Zw6ZWsDtSDxH+JqQShkE8tX7UmjFKxDmt7Ub2m4pTqoGipp4Vzv3LQ/8A+io5Jty9K9Q1nJ06R5TsPl7eleqf6h6o7CjwT5mWRNOzIg9RSRnPBCxJRf8AWtLS4DzrqKrewO/cFDTrPp/tKwXEYV5hWxFWMLxG4g3rZ8XlrbghSQfUUsZnwCw5JTKT2v8AY1I/Bie6Vez9QBs8JURxcTAJolhuJJi4oZmf4dvpu2Qr7GlfG5LjGTdpYHYSPtU7sPUaqW1MO/RbHl2coUN6Js5gk7GsIw+cuosZolhuJ3BzNCK9RtoQOwLXXBW2h5NU8ZielZthuK1HdVWRxLO6qCtiswLYQNwDgZT01iOpq40+KzVHEt/iq03xIB8woKdcN2WvwT1o+pJ3iuV4dsjYUhNcUDr96sniSRvVRxTHDvNU/wBHUBTO5lrHNCfoKrKy3DgzoT9BS2vP5+aqz2df76Q6rT/1Cc2hV4lOLaGQZCRU4cbHSkNvPkj5vvXC+I0/mH1rwxAGgWnCPOqfVOoPSotLUzakB3iZI+eqy+LUj5qzOHGcqIYVw3WqpxSQNxUT2OA51lC+Mu5qF7ixarCaf21Q2hB9FxK0x/PEjnVN7ilKedZgvMnlm01awuRYt7ZC47iP1rWtquRmhSaO8Uy5zxoSIRalh3Nnl/MfrTFlv4euqu4QPvTblvBjLe41HvTvpnOu4pf1NGmIasywuUvumwJpnyrgJRguGtGw+BQjZIFWIAqhlFjVNUxj3aWQLLOGmmgISJ70aQyBsK84+kbmgOb8YYZgHW4J6A01Td554pjqnjcwbaSVLUEgdTWR5/8Ai/unDp9zWe5rxDicUZcdMHkDQF0aJ7MMTqtY4q/FFCJRhxrVtNZhmee4nEL/AJiiZ5A1zk3DGJeI0pKUnmRWk8OcAIbhTh1q+1IfUm2qqaxlMcPlJvDvD7zyh/LMfm5CtRyXhpDEKV5j6UXweCDYhIAFTKxAG9LjcpdSsXWbopPE/wBterjxx0r1HISIWPZPx3iWLKOtI6075N+JrLkBcpNZbi8KACagZwwKZrW1SF0X4ZjjcL9D4HiFh34XEn3omh9J2NfmXxHG7oWR71cy7jfFN/OTHemtqzspX4KDYr9IyK4Uyk7gVjGW/ia9YKTNNGA/EAq3bPsaIVGqd2FqDZN+KyDDufE2k+oFB8TwFhFbI0/8SRVrA8SpX8qh9KMM4zVyoi0HVAHVGaEjzSTifw0aPwOLT9DQrEfho6PheHuD+9akHK6CqWaNM/8AFNGLrD/ksXxH4d4wfCpB9yP6VQd4IzAfKD6Krd6+W6V7sKfBF9dVWAnhPMU/+In3H71yrIMy/wDgX9R+9foHSOlfNA6VnYUzsi+uqL87qyDMv/gc+o/euTwzmav/AAL+o/ev0ToHSvaB0rwoU+Cw46oV+eG+CczP/jI9VCrjP4dZgdwkeq/2Fb5bpX2R0ohSZwQnGVViDH4V4tXxOIH1NFML+ESvnf8Aon9zWt6q+FyiyN4IDiah3WfYP8K8On4lrV9B+go5hOBcGj/xz/yJNMhctND8VnCE7hXtH71uUcEHbVD/AMipsLlDLfwNpT6ACrYQBypMzPj1DWzSj9P3pQzn8V3UyEtxWFwCIUHuWxlYFU8RmjSPicSPUivzrmf4iYt35yPel3E50+58TivrXs3AIxhxuV+jcy49wbUy8D6XpLzr8YUCQwgnuf2rGxKzv9aZ8j4MW9dTiQO0k/pQOqZRJMJzMO3h6qTOPxAxj8jXpHQWoCjDPvHZayf83rTsq4CYTE+Y9TTjgshabSPKPYVOa8/tHqm9xuqyfJvw/edgrOnsN6fMi4CYZglMnqb00NKCLAVxi3iNqUahcO8hLyT3bK1hsGhAsAKkW7G1CmcYqYq1rrQbWSy0g3UjmOMxXidVcuIESaD5vmpbSSkbV6eK1rZsEwfw46/evUhf+sV9DXq2RwTPpnr/2Q=='
        this.bgcolor = '#FFF'
        this.preco = ''
        this.descricao = ''
    }

    static get observedAttributes(){
        return ['nome', 'image', 'bgcolor', 'preco', 'descricao', 'id']
    }

    attributeChangedCallback(nameAttr, oldValue, newValue){
        // this[nameAttr] = newValue

        if (nameAttr === 'nome'){
            this.nome = newValue
        }else if(nameAttr === 'image'){
            this.image = newValue
        }else if(nameAttr === 'bgcolor'){
            this.bgcolor = newValue
        }else if(nameAttr === 'preco'){
            this.preco = newValue
        }else if(nameAttr === 'descricao'){
            this.descricao = newValue
        }
    }

    connectedCallback(){
        this.shadow.appendChild(this.component())
        this.shadow.appendChild(this.styles())
    }

    styles(){
        const style = document.createElement('style')
        style.textContent =  
        `
            .card-pizza{
                display: flex;
                height: fit-content;
                width: fit-content;
                flex-direction: column;
                margin-left: 90px;
                gap: 5px;
                /* border: 1px solid #000; */
                border-radius: 10px;
                box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
            }
            
            .card-pizza img{
                display: flex;
                border-radius: 5px 5px 0px 0px;
            }
            
            .card-pizza h1{
                color: #000;
                margin-left: 10px;
                font-family: 'Inter', sans-serif;
                font-weight: 400;
            }
            
            .card-descricao{
                display: flex;
                font-family: 'Inter', sans-serif;
                margin-left: 10px;
                font-weight: 300;
            }
            
            .price{
                display: flex;
                justify-content: flex-end;
                padding: 20px;
                font-family: 'Inter', sans-serif;
                font-size: 30px;
                font-weight: 300
            }
            
            .container-price{
                display: flex;
                background-color: #FF2727;
                width: max-content;
                border-radius: 5px;
                margin-left: 10px;
                margin-top: 5px;
            }
        `
        return style
    }

    component(){
        const card = document.createElement('div')
        card.classList.add('card-pizza')
        card.innerHTML = `
        <img src="${this.image}" alt="">
        <h1 class="card-titulo">${this.nome}</h1>
        <span class="card-descricao">${this.descricao}</span>
        <div class="container-price">
            <span class="price">${this.preco}</span>
        </div>
        `
        return card
    }
}

//Para a web entender esse componente
customElements.define('card-promocoes', PromoCard)