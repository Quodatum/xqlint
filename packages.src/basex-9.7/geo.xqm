(:~ 
 : This <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231026/https://docs.basex.org/wiki/Module_Library">XQuery Module</a> contains functions that may be applied to geometry data conforming to the Open Geospatial Consortium (OGC) Simple Feature (SF) data model. It is based on the <a href="https://web.archive.org/web/20220623231026/http://expath.org/spec/geo">EXPath Geo Module</a> and uses the <a href="https://web.archive.org/web/20220623231026/https://projects.eclipse.org/projects/locationtech.jts">JTS</a> library.
 :
 : @author BaseX Team
 : @see https://web.archive.org/web/20220623231014/https://docs.basex.org/wiki/Geo_Module
 :)
module namespace geo = "http://expath.org/ns/geo";
declare namespace experr = "http://expath.org/ns/error";

(:~ 
 : Returns the dimension of the given geometry <code>$geometry</code>.
 :
 : @param $geometry value of type element(*)
 : @return value of type xs:integer
 : @error experr:GEO0001 the given element is not recognized as a valid geometry.
 : @error experr:GEO0002 the given element cannot be read by reader for some reason.
 :)
declare function geo:dimension($geometry as element(*)) as xs:integer external;

(:~ 
 : Returns the name of the geometry type of given geometry <code>$geometry</code>, if the geometry is not recognized with an error massage.
 :
 : @param $geometry value of type element(*)
 : @return value of type xs:QName
 : @error experr:GEO0001 the given element is not recognized as a valid geometry.
 : @error experr:GEO0002 the given element cannot be read by reader for some reason.
 :)
declare function geo:geometry-type($geometry as element(*)) as xs:QName external;

(:~ 
 : Returns the ID of the Spatial Reference System used by the given geometry <code>$geometry</code>. Spatial Reference System information is supported in the simple way defined in the SFS. A Spatial Reference System ID (SRID) is present in each Geometry object. Geometry provides basic accessor operations for this field, but no others. The SRID is represented as an integer (based on the <a href="https://web.archive.org/web/20220623231026/https://www.ogc.org/standards/sfs">OpenGIS Simple Features Specifications For SQL</a>).<br/> Here is a difference between the <a href="https://web.archive.org/web/20220623231026/http://expath.org/spec/geo">EXPath Geo Module</a> and the implementation in BaseX, since the specification return the URI.
 :
 : @param $geometry value of type element(*)
 : @return value of type xs:integer
 : @error experr:GEO0001 the given element is not recognized as a valid geometry.
 : @error experr:GEO0002 the given element cannot be read by reader for some reason.
 :)
declare function geo:srid($geometry as element(*)) as xs:integer external;

(:~ 
 : Returns the gml:Envelope of the given geometry <code>$geometry</code>. The envelope is the minimum bounding box of this geometry. If this Geometry is the empty geometry, returns an empty Point. If the Geometry is a point, returns a non-empty Point. Otherwise, returns a Polygon whose points are (minx, miny), (maxx, miny), (maxx, maxy), (minx, maxy), (minx, miny).
 :
 : @param $geometry value of type element(*)
 : @return value of type element(*)
 : @error experr:GEO0001 the given element is not recognized as a valid geometry.
 : @error experr:GEO0002 the given element cannot be read by reader for some reason.
 : @error experr:GEO0005 the output object cannot be written as an element by writer for some reason.
 :)
declare function geo:envelope($geometry as element(*)) as element(*) external;

(:~ 
 : Returns the WKT (Well-known Text) representation of the given geometry <code>$geometry</code>. The envelope is the minimum bounding box of this geometry
 :
 : @param $geometry value of type element(*)
 : @return value of type xs:string
 : @error experr:GEO0001 the given element is not recognized as a valid geometry.
 : @error experr:GEO0002 the given element cannot be read by reader for some reason.
 :)
declare function geo:as-text($geometry as element(*)) as xs:string external;

(:~ 
 : Returns the WKB (Well-known Binary) representation of the given geometry <code>$geometry</code>.
 :
 : @param $geometry value of type element(*)
 : @return value of type xs:base64Binary
 : @error experr:GEO0001 the given element is not recognized as a valid geometry.
 : @error experr:GEO0002 the given element cannot be read by reader for some reason.
 :)
declare function geo:as-binary($geometry as element(*)) as xs:base64Binary external;

(:~ 
 : Returns whether the given geometry is simple <code>$geometry</code> and does not have has no anomalous geometric points (ie. the geometry does not self-intersect and does not pass through the same point more than once (may be a ring)).
 :
 : @param $geometry value of type element(*)
 : @return value of type xs:boolean
 : @error experr:GEO0001 the given element is not recognized as a valid geometry.
 : @error experr:GEO0002 the given element cannot be read by reader for some reason.
 :)
declare function geo:is-simple($geometry as element(*)) as xs:boolean external;

(:~ 
 : Returns the boundary of the given geometry <code>$geometry</code>, in GML 2. The return value is a sequence of either gml:Point or gml:LinearRing elements as a GeometryCollection object. For a Point or MultiPoint, the boundary is the empty geometry, nothing is returned.
 :
 : @param $geometry value of type element(*)
 : @return value of type element(*)?
 : @error experr:GEO0001 the given element is not recognized as a valid geometry.
 : @error experr:GEO0002 the given element cannot be read by reader for some reason.
 : @error experr:GEO0005 the output object cannot be written as an element by writer for some reason.
 :)
declare function geo:boundary($geometry as element(*)) as element(*)? external;

(:~ 
 : Returns the number of geometry in a geometry-collection <code>$geometry</code>, in GML. For the geometries which are not a collection, it returns the instant value 1.<br/> This function is implemented wider than the specification and accepts all types of geometries, while the specification limits it to the collection types (MultiPoint, MultiPolygon, ...).
 :
 : @param $geometry value of type element(*)
 : @return value of type xs:integer
 : @error experr:GEO0001 the given element(s) is not recognized as a valid geometry (QName).
 : @error experr:GEO0002 the given element cannot be read by reader for some reason.
 :)
declare function geo:num-geometries($geometry as element(*)) as xs:integer external;

(:~ 
 : Returns the Nth geometry in geometry-collection <code>$geometry</code>, in GML. For the geometries which are not a collection, it returns the geometry if geoNumber <code>$geoNumber</code> is 1. <br/> This function is implemented wider than the specification and accepts all types of geometries, while the specification limits it to the collection types (MultiPoint, MultiPolygon, ...).
 :
 : @param $geometry value of type element(*)
 : @param $geoNumber value of type xs:integer
 : @return value of type element(*)
 : @error experr:GEO0001 the given element(s) is not recognized as a valid geometry (QName).
 : @error experr:GEO0002 the given element cannot be read by reader for some reason.
 : @error experr:GEO0004 the the input index of geometry is out of range.
 : @error experr:GEO0005 the output object cannot be written as an element by writer for some reason.
 :)
declare function geo:geometry-n($geometry as element(*), $geoNumber as xs:integer) as element(*) external;

(:~ 
 : Returns the length of the geometry <code>$geometry</code>. If the geometry is a point, zero value will be returned.
 :
 : @param $geometry value of type element(*)
 : @return value of type xs:double
 : @error experr:GEO0001 the given element(s) is not recognized as a valid geometry (QName).
 : @error experr:GEO0002 the given element cannot be read by reader for some reason.
 :)
declare function geo:length($geometry as element(*)) as xs:double external;

(:~ 
 : Returns integer value of number of the points in the given geometry<code>$geometry</code>. It can be used not only for Lines, also any other geometry types, like MultiPolygon. For Point geometry it will return 1.<br/> This is an implementation different from the EXPath geo specification, as it limits the input geometry type only to lines.
 :
 : @param $geometry value of type element(*)
 : @return value of type xs:integer
 : @error experr:GEO0001 the given element(s) is not recognized as a valid geometry (QName).
 : @error experr:GEO0002 the given element cannot be read by reader for some reason.
 :)
declare function geo:num-points($geometry as element(*)) as xs:integer external;

(:~ 
 : Returns the area of the given geometry <code>$geometry</code>. For points and line the return value will be zero.
 :
 : @param $geometry value of type element(*)
 : @return value of type xs:double
 : @error experr:GEO0001 the given element(s) is not recognized as a valid geometry (QName).
 : @error experr:GEO0002 the given element cannot be read by reader for some reason.
 :)
declare function geo:area($geometry as element(*)) as xs:double external;

(:~ 
 : Returns the mathematical centroid of the given geometry <code>$geometry</code>, as a gml:Point. Based on the definition, this point is not always on the surface of the geometry <code>$geometry</code>.
 :
 : @param $geometry value of type element(*)
 : @return value of type element(*)
 : @error experr:GEO0001 the given element(s) is not recognized as a valid geometry (QName).
 : @error experr:GEO0002 the given element cannot be read by reader for some reason.
 : @error experr:GEO0005 the output object cannot be written as an element by writer for some reason.
 :)
declare function geo:centroid($geometry as element(*)) as element(*) external;

(:~ 
 : Returns an interior point on the given geometry <code>$geometry</code>, as a gml:Point. It is guaranteed to be on surface. Otherwise, the point may lie on the boundary of the geometry.
 :
 : @param $geometry value of type element(*)
 : @return value of type element(*)
 : @error experr:GEO0001 the given element(s) is not recognized as a valid geometry (QName).
 : @error experr:GEO0002 the given element cannot be read by reader for some reason.
 : @error experr:GEO0005 the output object cannot be written as an element by writer for some reason.
 :)
declare function geo:point-on-surface($geometry as element(*)) as element(*) external;

(:~ 
 : Returns whether geometry1 <code>$geometry1</code> is spatially equal to $geometry2 <code>$geometry2</code>.
 :
 : @param $geometry1 value of type element(*)
 : @param $geometry2 value of type element(*)
 : @return value of type xs:boolean
 : @error experr:GEO0001 the given element(s) is not recognized as a valid geometry (QName).
 : @error experr:GEO0002 the given element cannot be read by reader for some reason.
 :)
declare function geo:equals($geometry1 as element(*), $geometry2 as element(*)) as xs:boolean external;

(:~ 
 : Returns whether geometry1 <code>$geometry1</code> is spatially disjoint from $geometry2 <code>$geometry2</code> (they have no point in common, they do not intersect each other, and the DE-9IM Intersection Matrix for the two geometries is FF*FF****).
 :
 : @param $geometry1 value of type element(*)
 : @param $geometry2 value of type element(*)
 : @return value of type xs:boolean
 : @error experr:GEO0001 the given element(s) is not recognized as a valid geometry (QName).
 : @error experr:GEO0002 the given element cannot be read by reader for some reason.
 :)
declare function geo:disjoint($geometry1 as element(*), $geometry2 as element(*)) as xs:boolean external;

(:~ 
 : Returns whether geometry1 <code>$geometry1</code> is spatially intersects $geometry2 <code>$geometry2</code>. This is true if disjoint function of the two geometries returns false.
 :
 : @param $geometry1 value of type element(*)
 : @param $geometry2 value of type element(*)
 : @return value of type xs:boolean
 : @error experr:GEO0001 the given element(s) is not recognized as a valid geometry (QName).
 : @error experr:GEO0002 the given element cannot be read by reader for some reason.
 :)
declare function geo:intersects($geometry1 as element(*), $geometry2 as element(*)) as xs:boolean external;

(:~ 
 : Returns whether geometry1 <code>$geometry1</code> is spatially touches $geometry2 <code>$geometry2</code>.
 :
 : @param $geometry1 value of type element(*)
 : @param $geometry2 value of type element(*)
 : @return value of type xs:boolean
 : @error experr:GEO0001 the given element(s) is not recognized as a valid geometry (QName).
 : @error experr:GEO0002 the given element cannot be read by reader for some reason.
 :)
declare function geo:touches($geometry1 as element(*), $geometry2 as element(*)) as xs:boolean external;

(:~ 
 : Returns whether geometry1 <code>$geometry1</code> is spatially crosses $geometry2 <code>$geometry2</code>. It means, if the geometries have some but not all interior points in common. Returns true if the DE-9IM intersection matrix for the two geometries is:<br/> <p> <code>T*T******</code> (for P/L, P/A, and L/A situations)<br/> <code>T*****T**</code> (for L/P, A/P, and A/L situations)<br/> <code>0********</code> (for L/L situations).<br/> </p>
 :
 : @param $geometry1 value of type element(*)
 : @param $geometry2 value of type element(*)
 : @return value of type xs:boolean
 : @error experr:GEO0001 the given element(s) is not recognized as a valid geometry (QName).
 : @error experr:GEO0002 the given element cannot be read by reader for some reason.
 :)
declare function geo:crosses($geometry1 as element(*), $geometry2 as element(*)) as xs:boolean external;

(:~ 
 : Returns whether geometry1 <code>$geometry1</code> is spatially within $geometry2 <code>$geometry2</code>.
 :
 : @param $geometry1 value of type element(*)
 : @param $geometry2 value of type element(*)
 : @return value of type xs:boolean
 : @error experr:GEO0001 the given element(s) is not recognized as a valid geometry (QName).
 : @error experr:GEO0002 the given element cannot be read by reader for some reason.
 :)
declare function geo:within($geometry1 as element(*), $geometry2 as element(*)) as xs:boolean external;

(:~ 
 : Returns whether geometry1 <code>$geometry1</code> spatially contains $geometry2 <code>$geometry2</code>. Returns true if within function of these two geometries also returns true.
 :
 : @param $geometry1 value of type element(*)
 : @param $geometry2 value of type element(*)
 : @return value of type xs:boolean
 : @error experr:GEO0001 the given element(s) is not recognized as a valid geometry (QName).
 : @error experr:GEO0002 the given element cannot be read by reader for some reason.
 :)
declare function geo:contains($geometry1 as element(*), $geometry2 as element(*)) as xs:boolean external;

(:~ 
 : Returns whether geometry1 <code>$geometry1</code> is spatially overlaps $geometry2 <code>$geometry2</code>.
 :
 : @param $geometry1 value of type element(*)
 : @param $geometry2 value of type element(*)
 : @return value of type xs:boolean
 : @error experr:GEO0001 the given element(s) is not recognized as a valid geometry (QName).
 : @error experr:GEO0002 the given element cannot be read by reader for some reason.
 :)
declare function geo:overlaps($geometry1 as element(*), $geometry2 as element(*)) as xs:boolean external;

(:~ 
 : Returns whether relationships between the boundaries, interiors and exteriors of geometry1 <code>$geometry1</code> and geometry2 <code>$geometry2</code> match the pattern specified in intersectionMatrix <code>$geometry2</code>, which should have the length of 9 charachters.<br/>The values in the DE-9IM can be T, F, *, 0, 1, 2 .<br/> <p>- T means the intersection gives a non-empty result.<br/> - F means the intersection gives an empty result.<br/> - * means any result.<br/> - 0, 1, 2 gives the expected dimension of the result (point, curve, surface)<br/> </p>
 :
 : @param $geometry1 value of type element(*)
 : @param $geometry2 value of type element(*)
 : @param $intersectionMatrix value of type xs:string
 : @return value of type xs:boolean
 : @error experr:GEO0001 the given element(s) is not recognized as a valid geometry (QName).
 : @error experr:GEO0002 the given element cannot be read by reader for some reason.
 : @error experr:GEO0006 the given matrix is invalid.
 :)
declare function geo:relate($geometry1 as element(*), $geometry2 as element(*), $intersectionMatrix as xs:string) as xs:boolean external;

(:~ 
 : Returns the shortest distance, in the units of the spatial reference system of geometry1 <code>$geometry1</code>, between the geometries, where that distance is the distance between a point on each of the geometries.
 :
 : @param $geometry1 value of type element(*)
 : @param $geometry2 value of type element(*)
 : @return value of type xs:double
 : @error experr:GEO0001 the given element(s) is not recognized as a valid geometry (QName).
 : @error experr:GEO0002 the given element cannot be read by reader for some reason.
 :)
declare function geo:distance($geometry1 as element(*), $geometry2 as element(*)) as xs:double external;

(:~ 
 : Returns polygonal geometry representing the buffer by distance <code>$distance</code> of geometry <code>$geometry</code> a buffer area around this geometry having the given width, in the spatial reference system of geometry. The buffer of a Geometry is the Minkowski sum or difference of the geometry with a disc of radius abs(distance). The buffer is constructed using 8 segments per quadrant to represent curves.
 :
 : @param $geometry value of type element(*)
 : @param $distance value of type xs:double
 : @return value of type element(*)
 : @error experr:GEO0001 the given element(s) is not recognized as a valid geometry (QName).
 : @error experr:GEO0002 the given element cannot be read by reader for some reason.
 : @error experr:GEO0005 the output object cannot be written as an element by writer for some reason.
 :)
declare function geo:buffer($geometry as element(*), $distance as xs:double) as element(*) external;

(:~ 
 : Returns the convex hull geometry of the given geometry <code>$geometry</code> in GML, or the empty sequence. Actually returns the object of smallest dimension possible.
 :
 : @param $geometry value of type element(*)
 : @return value of type element(*)
 : @error experr:GEO0001 the given element(s) is not recognized as a valid geometry (QName).
 : @error experr:GEO0002 the given element cannot be read by reader for some reason.
 : @error experr:GEO0005 the output object cannot be written as an element by writer for some reason.
 :)
declare function geo:convex-hull($geometry as element(*)) as element(*) external;

(:~ 
 : Returns the intersection geometry of geometry1 <code>$geometry1</code> with geometry2 <code>$geometry2</code>, in GML or empty sequence if there is no intersection of these geometries.
 :
 : @param $geometry1 value of type element(*)
 : @param $geometry2 value of type element(*)
 : @return value of type element(*)?
 : @error experr:GEO0001 the given element(s) is not recognized as a valid geometry (QName).
 : @error experr:GEO0002 the given element cannot be read by reader for some reason.
 : @error experr:GEO0005 the output object cannot be written as an element by writer for some reason.
 :)
declare function geo:intersection($geometry1 as element(*), $geometry2 as element(*)) as element(*)? external;

(:~ 
 : Returns the union geometry of geometry1 <code>$geometry1</code> with geometry2 <code>$geometry2</code>, in GML.
 :
 : @param $geometry1 value of type element(*)
 : @param $geometry2 value of type element(*)
 : @return value of type element(*)
 : @error experr:GEO0001 the given element(s) is not recognized as a valid geometry (QName).
 : @error experr:GEO0002 the given element cannot be read by reader for some reason.
 : @error experr:GEO0005 the output object cannot be written as an element by writer for some reason.
 :)
declare function geo:union($geometry1 as element(*), $geometry2 as element(*)) as element(*) external;

(:~ 
 : Returns the difference geometry of geometry1 <code>$geometry1</code> with geometry2 <code>$geometry2</code>, in GML, or empty sequence if the difference is empty, as a set of point in geometry1 <code>$geometry1</code> and not included in geometry2 <code>$geometry2</code>.
 :
 : @param $geometry1 value of type element(*)
 : @param $geometry2 value of type element(*)
 : @return value of type element(*)?
 : @error experr:GEO0001 the given element(s) is not recognized as a valid geometry (QName).
 : @error experr:GEO0002 the given element cannot be read by reader for some reason.
 : @error experr:GEO0005 the output object cannot be written as an element by writer for some reason.
 :)
declare function geo:difference($geometry1 as element(*), $geometry2 as element(*)) as element(*)? external;

(:~ 
 : Returns the symmetric difference geometry of geometry1 <code>$geometry1</code> with geometry2 <code>$geometry2</code>, in GML, or empty sequence if the difference is empty, as a set of point in one of the geometries and not included in the other.
 :
 : @param $geometry1 value of type element(*)
 : @param $geometry2 value of type element(*)
 : @return value of type element(*)?
 : @error experr:GEO0001 the given element(s) is not recognized as a valid geometry (QName).
 : @error experr:GEO0002 the given element cannot be read by reader for some reason.
 : @error experr:GEO0005 the output object cannot be written as an element by writer for some reason.
 :)
declare function geo:sym-difference($geometry1 as element(*), $geometry2 as element(*)) as element(*)? external;

(:~ 
 : Returns the x coordinate of point <code>$point</code>. A point has to have an x coordinate.
 :
 : @param $point value of type element(*)
 : @return value of type xs:double
 : @error experr:GEO0001 the given element(s) is not recognized as a valid geometry (QName).
 : @error experr:GEO0002 the given element cannot be read by reader for some reason.
 :)
declare function geo:x($point as element(*)) as xs:double external;

(:~ 
 : Returns the y coordinate of point <code>$point</code>. If the point does not have the y coordinate, 0 will be returned.
 :
 : @param $point value of type element(*)
 : @return value of type xs:double?
 : @error experr:GEO0001 the given element(s) is not recognized as a valid geometry (QName).
 : @error experr:GEO0002 the given element cannot be read by reader for some reason.
 :)
declare function geo:y($point as element(*)) as xs:double? external;

(:~ 
 : Returns the z coordinate of point <code>$point</code>. If the point does not have the y coordinate, 0 will be returned.
 :
 : @param $point value of type element(*)
 : @return value of type xs:double?
 : @error experr:GEO0001 the given element(s) is not recognized as a valid geometry (QName).
 : @error experr:GEO0002 the given element cannot be read by reader for some reason.
 :)
declare function geo:z($point as element(*)) as xs:double? external;

(:~ 
 : Returns the starting point of the given line <code>$line</code>. <code>$line</code> has to be a single line, LineString or LinearRing.
 :
 : @param $line value of type element(*)
 : @return value of type element(*)
 : @error experr:GEO0001 the given element(s) is not recognized as a valid geometry (QName).
 : @error experr:GEO0002 the given element cannot be read by reader for some reason.
 : @error experr:GEO0003 the given element has to be a line. Other geometries are not accepted.
 :)
declare function geo:start-point($line as element(*)) as element(*) external;

(:~ 
 : Returns the ending point of the given line <code>$line</code>. <code>$line</code> has to be a single line, LineString or LinearRing.
 :
 : @param $line value of type element(*)
 : @return value of type element(*)
 : @error experr:GEO0001 the given element(s) is not recognized as a valid geometry (QName).
 : @error experr:GEO0002 the given element cannot be read by reader for some reason.
 : @error experr:GEO0003 the given element has to be a line. Other geometries are not accepted.
 :)
declare function geo:end-point($line as element(*)) as element(*) external;

(:~ 
 : Returns a boolean value that shows the line <code>$line</code> is a closed loop (start point and end point are the same) or not. <code>$line</code> has to be a line, as a geometry, LineString or LinearRing, and MultiLineString.
 :
 : @param $line value of type element(*)
 : @return value of type xs:boolean
 : @error experr:GEO0001 the given element(s) is not recognized as a valid geometry (QName).
 : @error experr:GEO0002 the given element cannot be read by reader for some reason.
 : @error experr:GEO0003 the given element has to be a line. Other geometries are not accepted.
 :)
declare function geo:is-closed($line as element(*)) as xs:boolean external;

(:~ 
 : Returns a boolean value that shows the line <code>$line</code> is a ring (closed loop and single) or not. <code>$line</code> has to be a single line, as a geometry, LineString or LinearRing.
 :
 : @param $line value of type element(*)
 : @return value of type xs:boolean
 : @error experr:GEO0001 the given element(s) is not recognized as a valid geometry (QName).
 : @error experr:GEO0002 the given element cannot be read by reader for some reason.
 : @error experr:GEO0003 the given element has to be a line. Other geometries are not accepted.
 :)
declare function geo:is-ring($line as element(*)) as xs:boolean external;

(:~ 
 : Returns the Nth point in the given line <code>$geometry</code>. <code>$line</code> has to be a single line, as a geometry, LineString or LinearRing.
 :
 : @param $line value of type element(*)
 : @return value of type element(*)
 : @error experr:GEO0001 the given element(s) is not recognized as a valid geometry (QName).
 : @error experr:GEO0002 the given element cannot be read by reader for some reason.
 : @error experr:GEO0003 the given element has to be a line. Other geometries are not accepted.
 : @error experr:GEO0004 the the input index of geometry is out of range.
 : @error experr:GEO0005 the output object cannot be written as an element by writer for some reason.
 :)
declare function geo:point-n($line as element(*)) as element(*) external;

(:~ 
 : Returns the outer ring of the given polygon <code>$geometry</code>, as a gml:LineString.
 :
 : @param $polygon value of type element(*)
 : @return value of type element(*)
 : @error experr:GEO0001 the given element(s) is not recognized as a valid geometry (QName).
 : @error experr:GEO0002 the given element cannot be read by reader for some reason.
 : @error experr:GEO0003 the given element has to be a polygon. Other geometries are not accepted.
 : @error experr:GEO0005 the output object cannot be written as an element by writer for some reason.
 :)
declare function geo:exterior-ring($polygon as element(*)) as element(*) external;

(:~ 
 : Returns the number of interior rings in the given polygon <code>$geometry</code>.
 :
 : @param $polygon value of type element(*)
 : @return value of type xs:integer
 : @error experr:GEO0001 the given element(s) is not recognized as a valid geometry (QName).
 : @error experr:GEO0002 the given element cannot be read by reader for some reason.
 : @error experr:GEO0003 the given element has to be a polygon. Other geometries are not accepted.
 :)
declare function geo:num-interior-ring($polygon as element(*)) as xs:integer external;

(:~ 
 : Returns the outer ring of the given polygon <code>$geometry</code>, as a gml:LineString.
 :
 : @param $polygon value of type element(*)
 : @return value of type element(*)
 : @error experr:GEO0001 the given element(s) is not recognized as a valid geometry (QName).
 : @error experr:GEO0002 the given element cannot be read by reader for some reason.
 : @error experr:GEO0003 the given element has to be a polygon. Other geometries are not accepted.
 : @error experr:GEO0004 the the input index of geometry is out of range.
 : @error experr:GEO0005 the output object cannot be written as an element by writer for some reason.
 :)
declare function geo:interior-ring-n($polygon as element(*)) as element(*) external;
