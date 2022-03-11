module Kernels

using Parameters
# using Tardigrade.FunctionSpaces
# using ..FunctionSpaces

include("./Poisson.jl")

abstract type AbstractKernel end

@with_kw struct Kernel
    name::String
    primary_variable::String
    coupled_variables::Array{String,1} = []
    blocks::Array{Int64,1}
    #
    # initialize_quadrature_point_function
    # residual_at_quadrature_point_function
    # tangent_at_quadrature_point_function
    update_kernel_method
end

function kernel_factory(input_settings)
    if input_settings["kernel name"] == "poisson"
        return update_poisson_kernel_at_qp!
    else
        throw(AssertionError("Unsupported kernel"))
    end
end

end
