# WCS documentation

The Web Coverage Service (WCS) is a standard created by the OGC that refers to the receiving of geospatial information as ‘coverages’ (Raster data)

An important distinction must be made between WCS and Web Map Service (WMS). They are similar, and can return similar formats, but a WCS is able to return more information, including valuable metadata and more formats. It additionally allows more precise queries, potentially against multi-dimensional backend formats.

The results of a WCS can be used for complex modeling and analysis, as it often contains more information. It also allows more complex querying - clients can extract just the portion of the coverage that they need.

## WCS Requests

### 1. GetCapabilities

Retrieves a list of the server’s data, as well as valid WCS operations and parameters.

```
Syntax: http://{ geoserver_url }/wcs?service=WCS&AcceptVersions={ wcs_version }&request=GetCapabilities
```

```
Ex: http://localhost:8080/geoserver/wcs?service=WCS&AcceptVersions=2.0.0&request=GetCapabilities
```

### 2. DescribeCoverage

Retrieves an XML document that fully describes the request coverages.

```
Syntax: http://{ geoserver_url }/ows?service=WCS&version={ coverage_version }&request=DescribteCoverage&coverageId={ layer_name }
```

```
Ex: http://localhost:8080/geoserver/ows?service=WCS&version=2.0.0&request=GetCoverage&coverageId=tajikistan:EAR_Agriculture
```

### 3. GetCoverage

Returns a coverage in a well known format. Like a WMS GetMap request, but with several extensions to support the retrieval of coverages.

```
Syntax: http://{ geoserver_url }/ows?service=WCS&version={ coverage_version }&request=GetCoverage&coverageId={ layer_name }&format={ output_format }
```

```
Ex: http://localhost:8080/geoserver/ows?service=WCS&version=2.0.0&request=GetCoverage&coverageId=tajikistan:EAR_Agriculture&format=image/geotiff
```

## Available formats for GetCoverage request

- image/png
- image/jpeg
- image/tiff
- image/bmi
- image/gif
- image/geotiff
- image/gtopo30
- image/ArcGrid
- image/ArcGrid-GZIP
