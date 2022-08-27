var documenterSearchIndex = {"docs":
[{"location":"Fields/#Fields","page":"Fields","title":"Fields","text":"","category":"section"},{"location":"Fields/","page":"Fields","title":"Fields","text":"Modules = [Fields,]","category":"page"},{"location":"Fields/#Tardigrade.Fields","page":"Fields","title":"Tardigrade.Fields","text":"Fields\n\nA module for handling FEM field solutions.\n\n\n\n\n\n","category":"module"},{"location":"Fields/#Tardigrade.Fields.AbstractField","page":"Fields","title":"Tardigrade.Fields.AbstractField","text":"AbstractField\n\nParent type for all FEM fields.\n\n\n\n\n\n","category":"type"},{"location":"Fields/#Tardigrade.Fields.AbstractScalarField","page":"Fields","title":"Tardigrade.Fields.AbstractScalarField","text":"AbstractScalarField\n\nParent type for all FEM scalar fields.\n\n\n\n\n\n","category":"type"},{"location":"Fields/#Tardigrade.Fields.UncoupledScalarField","page":"Fields","title":"Tardigrade.Fields.UncoupledScalarField","text":"UncoupledScalarField\n\nContainer for an uncoupled scalar field.\n\n\n\n\n\n","category":"type"},{"location":"Fields/#Tardigrade.Fields.UncoupledScalarField-Tuple{I} where I<:Integer","page":"Fields","title":"Tardigrade.Fields.UncoupledScalarField","text":"UncoupledScalarField(n_nodes::I) where {I <: Integer}\n\nInit method for an uncoupled scalar field.\n\n\n\n\n\n","category":"method"},{"location":"Fields/#Tardigrade.Fields.element_level_values-Tuple{Tardigrade.Meshes.SingleBlockExodusMesh, Tardigrade.Fields.UncoupledScalarField}","page":"Fields","title":"Tardigrade.Fields.element_level_values","text":"element_level_values(mesh::SingleBlockExodusMesh, u::UncoupledScalarField)\n\nMethod to gather element level values using views\n\n\n\n\n\n","category":"method"},{"location":"Tardigrade/#Tardigrade","page":"Tardigrade","title":"Tardigrade","text":"","category":"section"},{"location":"Tardigrade/","page":"Tardigrade","title":"Tardigrade","text":"Modules = [Tardigrade,]","category":"page"},{"location":"toc/","page":"Table of Contents","title":"Table of Contents","text":"","category":"page"},{"location":"BoundaryConditions/#Boundary-Conditions","page":"BoundaryConditions","title":"Boundary Conditions","text":"","category":"section"},{"location":"BoundaryConditions/","page":"BoundaryConditions","title":"BoundaryConditions","text":"Modules = [BoundaryConditions,]","category":"page"},{"location":"BoundaryConditions/#Tardigrade.BoundaryConditions","page":"BoundaryConditions","title":"Tardigrade.BoundaryConditions","text":"BoundaryConditions\n\n\n\n\n\n","category":"module"},{"location":"BoundaryConditions/#Tardigrade.BoundaryConditions.AbstractBC","page":"BoundaryConditions","title":"Tardigrade.BoundaryConditions.AbstractBC","text":"AbstractBC\n\n\n\n\n\n","category":"type"},{"location":"BoundaryConditions/#Tardigrade.BoundaryConditions.AbstractDirichletBC","page":"BoundaryConditions","title":"Tardigrade.BoundaryConditions.AbstractDirichletBC","text":"AbstractDirichletBC\n\n\n\n\n\n","category":"type"},{"location":"BoundaryConditions/#Tardigrade.BoundaryConditions.ConstantDirichletBC","page":"BoundaryConditions","title":"Tardigrade.BoundaryConditions.ConstantDirichletBC","text":"ConstantDirichletBC{I, F} <: AbstractDirichletBC\n\n\n\n\n\n","category":"type"},{"location":"BoundaryConditions/#Tardigrade.BoundaryConditions.ConstantDirichletBC-Tuple{Dict{Any, Any}, Any}","page":"BoundaryConditions","title":"Tardigrade.BoundaryConditions.ConstantDirichletBC","text":"ConstantDirichletBC(bc_settings::Dict{Any, Any}, node_set)\n\n\n\n\n\n","category":"method"},{"location":"BoundaryConditions/#Tardigrade.BoundaryConditions.DirichletBCs","page":"BoundaryConditions","title":"Tardigrade.BoundaryConditions.DirichletBCs","text":"DirichletBCs\n\n\n\n\n\n","category":"type"},{"location":"BoundaryConditions/#Tardigrade.BoundaryConditions.DirichletBCs-Tuple{Vector{Dict{Any, Any}}, Tardigrade.Meshes.AbstractMesh}","page":"BoundaryConditions","title":"Tardigrade.BoundaryConditions.DirichletBCs","text":"DirichletBCs(bcs_settings::Vector{Dict{Any, Any}}, mesh::AbstractMesh)\n\n\n\n\n\n","category":"method"},{"location":"BoundaryConditions/#Base.getindex-Union{Tuple{I}, Tuple{Tardigrade.BoundaryConditions.DirichletBCs, I}} where I<:Integer","page":"BoundaryConditions","title":"Base.getindex","text":"Base.getindex(bcs::DirichletBCs, bc::I) where {I <: Integer}\n\n\n\n\n\n","category":"method"},{"location":"BoundaryConditions/#Base.iterate","page":"BoundaryConditions","title":"Base.iterate","text":"Base.iterate(bcs::DirichletBCs, bc=1)\n\n\n\n\n\n","category":"function"},{"location":"BoundaryConditions/#Base.length-Tuple{Tardigrade.BoundaryConditions.DirichletBCs}","page":"BoundaryConditions","title":"Base.length","text":"Base.length(bcs::DirichletBCs)\n\n\n\n\n\n","category":"method"},{"location":"BoundaryConditions/#Tardigrade.BoundaryConditions.update_jacobian!-Union{Tuple{F}, Tuple{Matrix{F}, Tardigrade.BoundaryConditions.AbstractDirichletBC}} where F<:Real","page":"BoundaryConditions","title":"Tardigrade.BoundaryConditions.update_jacobian!","text":"update_jacobian!(K::Matrix{F}, bc::AbstractDirichletBC) where {F <: Real}\n\nthis is for a dense matrix, stupid but easy to start with\n\n\n\n\n\n","category":"method"},{"location":"BoundaryConditions/#Tardigrade.BoundaryConditions.update_jacobian!-Union{Tuple{F}, Tuple{Matrix{F}, Tardigrade.BoundaryConditions.ConstantDirichletBC}} where F<:Real","page":"BoundaryConditions","title":"Tardigrade.BoundaryConditions.update_jacobian!","text":"update_jacobian!(J::Matrix{F}, bc::ConstantDirichletBC) where {F <: Real}\n\n\n\n\n\n","category":"method"},{"location":"BoundaryConditions/#Tardigrade.BoundaryConditions.update_residual!-Union{Tuple{F}, Tuple{Vector{F}, Tardigrade.BoundaryConditions.AbstractDirichletBC}} where F<:Real","page":"BoundaryConditions","title":"Tardigrade.BoundaryConditions.update_residual!","text":"update_residual!(R::Vector{F}, bc::AbstractDirichletBC) where {F <: Real}\n\n\n\n\n\n","category":"method"},{"location":"BoundaryConditions/#Tardigrade.BoundaryConditions.update_residual!-Union{Tuple{F}, Tuple{Vector{F}, Tardigrade.BoundaryConditions.ConstantDirichletBC}} where F<:Real","page":"BoundaryConditions","title":"Tardigrade.BoundaryConditions.update_residual!","text":"update_residual!(R::Vector{F}, bc::ConstantDirichletBC) where {F <: Real}\n\n\n\n\n\n","category":"method"},{"location":"Elements/#Elements","page":"Elements","title":"Elements","text":"","category":"section"},{"location":"Elements/","page":"Elements","title":"Elements","text":"Modules = [Elements,]","category":"page"},{"location":"Elements/#Tardigrade.Elements.quad4_quadrature_points_and_weights-Tuple{Int64}","page":"Elements","title":"Tardigrade.Elements.quad4_quadrature_points_and_weights","text":"quad4_quadrature_points_and_weights(q_order::Int64)\n\nDefines quadrature rule for quad4 elements.\n\nArguments\n\nq_order::Int64: quadrature order\n\n\n\n\n\n","category":"method"},{"location":"Elements/#Tardigrade.Elements.quad4_quadrature_points_and_weights_static-Tuple{Int64}","page":"Elements","title":"Tardigrade.Elements.quad4_quadrature_points_and_weights_static","text":"quad4_quadrature_points_and_weights_static(q_order::Int64)\n\nDefines quadrature rule for quad4 elements.\n\nArguments\n\nq_order::Int64: quadrature order\n\n\n\n\n\n","category":"method"},{"location":"Elements/#Tardigrade.Elements.quad4_shape_function_gradients!-Union{Tuple{T}, Tuple{Matrix{T}, Vector{T}}} where T<:Real","page":"Elements","title":"Tardigrade.Elements.quad4_shape_function_gradients!","text":"quad4_shape_function_gradients!\n\nImplementation for quad4 element.\n\n\n\n\n\n","category":"method"},{"location":"Elements/#Tardigrade.Elements.quad4_shape_function_gradients-Union{Tuple{Vector{T}}, Tuple{T}} where T<:Real","page":"Elements","title":"Tardigrade.Elements.quad4_shape_function_gradients","text":"quad4_shape_function_gradients(ξ::Vector{T}) where {T <: Real}\n\nImplementation for quad4 element.\n\n\n\n\n\n","category":"method"},{"location":"Elements/#Tardigrade.Elements.quad4_shape_function_values!-Union{Tuple{T}, Tuple{Vector{T}, Vector{T}}} where T<:Real","page":"Elements","title":"Tardigrade.Elements.quad4_shape_function_values!","text":"quad4_shape_function_values!(φ::Vector{T}, ξ::Vector{T}) where {T <: Real}\n\nImplementation for quad4 element with pre-allocation.\n\n\n\n\n\n","category":"method"},{"location":"Elements/#Tardigrade.Elements.quad4_shape_function_values-Union{Tuple{Vector{T}}, Tuple{T}} where T<:Real","page":"Elements","title":"Tardigrade.Elements.quad4_shape_function_values","text":"quad4_shape_function_values(ξ::Vector{T}) where {T <: Real}\n\nImplementation for quad4 element.\n\n\n\n\n\n","category":"method"},{"location":"ShapeFunctions/#ShapeFunctions","page":"ShapeFunctions","title":"ShapeFunctions","text":"","category":"section"},{"location":"ShapeFunctions/","page":"ShapeFunctions","title":"ShapeFunctions","text":"Modules = [ShapeFunctions,]","category":"page"},{"location":"ShapeFunctions/#Tardigrade.ShapeFunctions","page":"ShapeFunctions","title":"Tardigrade.ShapeFunctions","text":"ShapeFunctions\n\nA module for working with FEM shape functions.\n\n\n\n\n\n","category":"module"},{"location":"ShapeFunctions/#Tardigrade.ShapeFunctions.AbstractShapeFunction","page":"ShapeFunctions","title":"Tardigrade.ShapeFunctions.AbstractShapeFunction","text":"AbstractShapeFunction\n\nParent type of all shape functions.\n\n\n\n\n\n","category":"type"},{"location":"ShapeFunctions/#Tardigrade.ShapeFunctions.LagrangeShapeFunction","page":"ShapeFunctions","title":"Tardigrade.ShapeFunctions.LagrangeShapeFunction","text":"LagrangeShapeFunction\n\nContainer for shape function methods on the master element.\n\n\n\n\n\n","category":"type"},{"location":"ShapeFunctions/#Tardigrade.ShapeFunctions.LagrangeShapeFunction-Tuple{String}","page":"ShapeFunctions","title":"Tardigrade.ShapeFunctions.LagrangeShapeFunction","text":"LagrangeShapeFunction(element_type::String)\n\nInit method for LagrangeShapeFunction.\n\n\n\n\n\n","category":"method"},{"location":"ShapeFunctions/#Tardigrade.ShapeFunctions.J!-Union{Tuple{S}, Tuple{T}, Tuple{Matrix{T}, Matrix{T}, S}} where {T<:Real, S}","page":"ShapeFunctions","title":"Tardigrade.ShapeFunctions.J!","text":"J!(J::Matrix{T}, ∇φ_ξ::Matrix{T}, X::S) where {T <: Real, S}\n\nInplace mapping Jacobian.\n\n\n\n\n\n","category":"method"},{"location":"ShapeFunctions/#Tardigrade.ShapeFunctions.J-Union{Tuple{S}, Tuple{T}, Tuple{Matrix{T}, S}} where {T<:Real, S}","page":"ShapeFunctions","title":"Tardigrade.ShapeFunctions.J","text":"J(∇φ_ξ::Matrix{T}, X::S) where {T <: Real, S}\n\nMapping Jacobian. Written to except views of coordinates.\n\n\n\n\n\n","category":"method"},{"location":"ShapeFunctions/#Tardigrade.ShapeFunctions.ShapeFunction-Tuple{Dict{Any, Any}, String}","page":"ShapeFunctions","title":"Tardigrade.ShapeFunctions.ShapeFunction","text":"ShapeFunction(shape_function_settings::Dict{Any, Any}, element_type::String)\n\n\n\n\n\n","category":"method"},{"location":"ShapeFunctions/#Tardigrade.ShapeFunctions.detJ-Union{Tuple{S}, Tuple{T}, Tuple{Matrix{T}, S}} where {T<:Real, S}","page":"ShapeFunctions","title":"Tardigrade.ShapeFunctions.detJ","text":"detJ(∇φ_ξ::Matrix{T}, X::S) where {T <: Real, S}\n\nDeterminant of mapping Jacobian. Written to except views of coordinates.\n\n\n\n\n\n","category":"method"},{"location":"ShapeFunctions/#Tardigrade.ShapeFunctions.map_∇φ_ξ!-Union{Tuple{S}, Tuple{T}, Tuple{Matrix{T}, Matrix{T}, S}} where {T<:Real, S}","page":"ShapeFunctions","title":"Tardigrade.ShapeFunctions.map_∇φ_ξ!","text":"map_∇φ_ξ!(∇φ_X::Matrix{T}, ∇φ_ξ::Matrix{T}, X::S) where {T <: Real, S}\n\nIn place version of map∇φξ\n\n\n\n\n\n","category":"method"},{"location":"ShapeFunctions/#Tardigrade.ShapeFunctions.map_∇φ_ξ-Union{Tuple{S}, Tuple{T}, Tuple{Matrix{T}, S}} where {T<:Real, S}","page":"ShapeFunctions","title":"Tardigrade.ShapeFunctions.map_∇φ_ξ","text":"map_∇φ_ξ(∇φ_ξ::Matrix{T}, X::S) where {T <: Real, S}\n\nMethod to map master element shape function grads to physical element.     Written to except views.\n\n\n\n\n\n","category":"method"},{"location":"Quadratures/#Quadratures-and-StaticQuadratures","page":"Quadratures","title":"Quadratures and StaticQuadratures","text":"","category":"section"},{"location":"Quadratures/","page":"Quadratures","title":"Quadratures","text":"Modules = [Quadratures,\n           StaticQuadratures]","category":"page"},{"location":"Quadratures/#Tardigrade.Quadratures","page":"Quadratures","title":"Tardigrade.Quadratures","text":"Quadratures\n\nA module for organizing quadrature integration rules.\n\n\n\n\n\n","category":"module"},{"location":"Quadratures/#Tardigrade.Quadratures.Quadrature","page":"Quadratures","title":"Tardigrade.Quadratures.Quadrature","text":"Quadrature\n\nContainer for managing quadrature points and weights.\n\nArguments\n\nξ::Matrix{Float64}: Quadrature points w::Vector{Float64}: Quadrature weights\n\n\n\n\n\n","category":"type"},{"location":"Quadratures/#Tardigrade.Quadratures.Quadrature-Tuple{String, Int64}","page":"Quadratures","title":"Tardigrade.Quadratures.Quadrature","text":"Quadrature(element_type::String, q_order::Int64)\n\nInit method for Quadrature\n\nArguments\n\nelement_type::String: The type of element in string format\nq_order::Int64: The order of the quadrature rule for element_type\n\n\n\n\n\n","category":"method"},{"location":"Quadratures/#Base.getindex-Tuple{Tardigrade.Quadratures.Quadrature, Int64}","page":"Quadratures","title":"Base.getindex","text":"Base.getindex(q::Quadrature, index::Int64)\n\nArguments\n\nq::Quadrature: Quadrature object\nindex::Int64: Quadrature point index\n\n\n\n\n\n","category":"method"},{"location":"Quadratures/#Base.iterate","page":"Quadratures","title":"Base.iterate","text":"Base.iterate(q::Quadrature, q_point=1)\n\nArguments\n\nq::Quadrature: Quadrature object\nindex::Int64: Quadrature point index\n\n\n\n\n\n","category":"function"},{"location":"Quadratures/#Base.length-Tuple{Tardigrade.Quadratures.Quadrature}","page":"Quadratures","title":"Base.length","text":"Base.length(q::Quadrature)\n\nReturns the number of quadrature points.\n\nq::Quadrature: Quadrature object\n\n\n\n\n\n","category":"method"},{"location":"Quadratures/#Tardigrade.Quadratures.quadrautre_order_error-Tuple{Int64}","page":"Quadratures","title":"Tardigrade.Quadratures.quadrautre_order_error","text":"quadrature_order_error(q_order::Int64)\n\nPre-defined error for improrper quadrature order.\n\nArguments\n\nq_order::Int64: quadrature order\n\n\n\n\n\n","category":"method"},{"location":"Quadratures/#Tardigrade.StaticQuadratures.StaticQuadrature","page":"Quadratures","title":"Tardigrade.StaticQuadratures.StaticQuadrature","text":"StaticQuadrature{Q, D, F}\n\nStaticArrays implementation of Quadrature\n\n\n\n\n\n","category":"type"},{"location":"Quadratures/#Tardigrade.StaticQuadratures.StaticQuadrature-Tuple{String, Int64}","page":"Quadratures","title":"Tardigrade.StaticQuadratures.StaticQuadrature","text":"StaticQuadrature(element_type::String, q_order::Int64)\n\nArguments\n\nelement_type::String: type of element\nq_order::Int64: quadrature order\n\n\n\n\n\n","category":"method"},{"location":"Quadratures/#Base.getindex-Tuple{Tardigrade.StaticQuadratures.StaticQuadrature, Int64}","page":"Quadratures","title":"Base.getindex","text":"Base.getindex(q::StaticQuadrature, index::Int64)\n\n\n\n\n\n","category":"method"},{"location":"Quadratures/#Base.iterate-2","page":"Quadratures","title":"Base.iterate","text":"Base.iterate(q::StaticQuadrature, q_point=1)\n\n\n\n\n\n","category":"function"},{"location":"Quadratures/#Base.length-Tuple{Tardigrade.StaticQuadratures.StaticQuadrature}","page":"Quadratures","title":"Base.length","text":"Base.length(q::StaticQuadrature)\n\n\n\n\n\n","category":"method"},{"location":"#Tardigrade","page":"Home","title":"Tardigrade","text":"","category":"section"},{"location":"#Inspiration","page":"Home","title":"Inspiration","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The main inspiration for Tardigrade.jl came from the INL FEM code Moose. Moose is a fully-implicit FEM code meant for highly coupled physics problems. It has shown great success in various fields such as coupled phase-field/solid mechanics, nuclear reactor design, etc. After using Moose for sometime, this package's author found the solid mechanics modules slightly cumbersome, especially for generalizing constitutive models for materials with state. Also, developing in C++ is not nearly as fun as julia!","category":"page"},{"location":"#Documentation","page":"Home","title":"Documentation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Pages = [\n    \"Tardigrade.md\",\n    \"Elements.md\",\n    \"Fields.md\",\n    \"Meshes.md\",\n    \"Quadratures.md\",\n    \"ShapeFunctions.md\"\n]","category":"page"},{"location":"Meshes/#Meshes","page":"Meshes","title":"Meshes","text":"","category":"section"},{"location":"Meshes/","page":"Meshes","title":"Meshes","text":"Modules = [Meshes,]","category":"page"},{"location":"Meshes/#Tardigrade.Meshes.AbstractExodusMesh","page":"Meshes","title":"Tardigrade.Meshes.AbstractExodusMesh","text":"AbstractExodusMesh\n\nParent type for all different exodus meshes.\n\n\n\n\n\n","category":"type"},{"location":"Meshes/#Tardigrade.Meshes.AbstractMesh","page":"Meshes","title":"Tardigrade.Meshes.AbstractMesh","text":"AbstractMesh\n\nParent type for all meshes.\n\n\n\n\n\n","category":"type"},{"location":"Meshes/#Tardigrade.Meshes.SingleBlockExodusMesh","page":"Meshes","title":"Tardigrade.Meshes.SingleBlockExodusMesh","text":"SingleBlockExodusMesh{I, F}\n\nExodus mesh that only has a single block, good for eductational purposes.\n\n\n\n\n\n","category":"type"},{"location":"Meshes/#Tardigrade.Meshes.SingleBlockExodusMesh-Tuple{String}","page":"Meshes","title":"Tardigrade.Meshes.SingleBlockExodusMesh","text":"SingleBlockExodusMesh(file_name::String)\n\nExodus mesh that only has a single block.\n\nArguments\n\nfile_name::String: string of absolute path of mesh file name.\n\n\n\n\n\n","category":"method"},{"location":"Meshes/#Tardigrade.Meshes.Mesh-Tuple{Dict{Any, Any}}","page":"Meshes","title":"Tardigrade.Meshes.Mesh","text":"Mesh(mesh_settings::Dict{Any, Any})\n\n\n\n\n\n","category":"method"},{"location":"Meshes/#Tardigrade.Meshes.element_level_connectivity-Union{Tuple{T}, Tuple{Tardigrade.Meshes.SingleBlockExodusMesh, T}} where T<:Integer","page":"Meshes","title":"Tardigrade.Meshes.element_level_connectivity","text":"element_level_connectivity(mesh::SingleBlockExodusMesh, e::T) where {T <: Integer}\n\nArguments\n\nmesh::SingleBlockExodusMesh: exodus mesh object\ne::T: element id, can be either Int32 or Int64\n\n\n\n\n\n","category":"method"},{"location":"Meshes/#Tardigrade.Meshes.element_level_coordinates-Tuple{Tardigrade.Meshes.SingleBlockExodusMesh}","page":"Meshes","title":"Tardigrade.Meshes.element_level_coordinates","text":"element_level_coordinates(mesh::SingleBlockExodusMesh)\n\nArguments\n\nmesh::SingleBlockExodusMesh: exodus mesh object\n\n\n\n\n\n","category":"method"},{"location":"Meshes/#Tardigrade.Meshes.element_level_coordinates-Union{Tuple{T}, Tuple{Tardigrade.Meshes.SingleBlockExodusMesh, T}} where T<:Integer","page":"Meshes","title":"Tardigrade.Meshes.element_level_coordinates","text":"element_level_coordinates(mesh::SingleBlockExodusMesh, e::T) where {T <: Integer}\n\nArguments\n\nmesh::SingleBlockExodusMesh: exodus mesh object\ne::T: element id, can be either Int32 or Int64\n\n\n\n\n\n","category":"method"}]
}
