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
 * The PatchedTagRequest model module.
 * @module model/PatchedTagRequest
 * @version 0.0.0
 */
class PatchedTagRequest {
    /**
     * Constructs a new <code>PatchedTagRequest</code>.
     * @alias module:model/PatchedTagRequest
     */
    constructor() { 
        
        PatchedTagRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PatchedTagRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PatchedTagRequest} obj Optional instance to populate.
     * @return {module:model/PatchedTagRequest} The populated <code>PatchedTagRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PatchedTagRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('color')) {
                obj['color'] = ApiClient.convertToType(data['color'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Full name of the tags
 * @member {String} name
 */
PatchedTagRequest.prototype['name'] = undefined;

/**
 *              Color of the Tag status in hexadecimal string without the '#' prefix.             Example: 'fff', 'fff0', '0f0f0f', '0f0f0f00'.         
 * @member {String} color
 */
PatchedTagRequest.prototype['color'] = undefined;






export default PatchedTagRequest;

