/**
 * BIMData API
 * BIMData API is a tool to interact with your models stored on BIMData’s servers.     Through the API, you can manage your projects, the clouds, upload your IFC files and manage them through endpoints.
 *
 * The version of the OpenAPI document: v1 (v1)
 * Contact: support@bimdata.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Geometry2dPoint model module.
 * @module model/Geometry2dPoint
 * @version 0.0.0
 */
class Geometry2dPoint {
    /**
     * Constructs a new <code>Geometry2dPoint</code>.
     * @alias module:model/Geometry2dPoint
     * @param x {Number} 
     * @param y {Number} 
     */
    constructor(x, y) { 
        
        Geometry2dPoint.initialize(this, x, y);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, x, y) { 
        obj['x'] = x;
        obj['y'] = y;
    }

    /**
     * Constructs a <code>Geometry2dPoint</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Geometry2dPoint} obj Optional instance to populate.
     * @return {module:model/Geometry2dPoint} The populated <code>Geometry2dPoint</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Geometry2dPoint();

            if (data.hasOwnProperty('x')) {
                obj['x'] = ApiClient.convertToType(data['x'], 'Number');
            }
            if (data.hasOwnProperty('y')) {
                obj['y'] = ApiClient.convertToType(data['y'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} x
 */
Geometry2dPoint.prototype['x'] = undefined;

/**
 * @member {Number} y
 */
Geometry2dPoint.prototype['y'] = undefined;






export default Geometry2dPoint;

