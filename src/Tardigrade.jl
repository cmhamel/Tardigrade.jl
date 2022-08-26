module Tardigrade

export Fields
export Meshes
export Quadratures

# lots of other things depend on Meshes.jl so load that first
include("Meshes.jl")

# rest can be alphabetical hopefully
include("Fields.jl")
include("Quadratures.jl")
# include("ShapeFunctions.jl")

end # module