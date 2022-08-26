using Tardigrade.Fields
using Tardigrade.Meshes

@tardigrade_test_set "TestFields.jl - ScalarField" begin
    mesh = SingleBlockExodusMesh("./mesh/mesh_test_0.25.g")
    
    u = UncoupledScalarField(size(mesh.nodal_coordinates, 1))
    @show u

    @time u_es = element_level_values(mesh, u)
    @show u_es

    for e in 1:size(mesh.connectivity, 1)
        @time u_e = element_level_values(mesh, u, e)
        @show u_e
    end

    update_field!(u, ones(Float64, size(u.u)))
    @show u.u
end