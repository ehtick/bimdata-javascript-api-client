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
 * The PatchedPriorityRequest model module.
 * @module model/PatchedPriorityRequest
 * @version 0.0.0
 */
class PatchedPriorityRequest {
    /**
     * Constructs a new <code>PatchedPriorityRequest</code>.
     * @alias module:model/PatchedPriorityRequest
     */
    constructor() { 
        
        PatchedPriorityRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PatchedPriorityRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PatchedPriorityRequest} obj Optional instance to populate.
     * @return {module:model/PatchedPriorityRequest} The populated <code>PatchedPriorityRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PatchedPriorityRequest();

            if (data.hasOwnProperty('priority')) {
                obj['priority'] = ApiClient.convertToType(data['priority'], 'String');
            }
            if (data.hasOwnProperty('color')) {
                obj['color'] = ApiClient.convertToType(data['color'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} priority
 */
PatchedPriorityRequest.prototype['priority'] = undefined;

/**
 *              Color of the priority in hexadecimal string without the '#' prefix.             Example: 'fff', 'fff0', '0f0f0f', '0f0f0f00'.         
 * @member {String} color
 */
PatchedPriorityRequest.prototype['color'] = undefined;






export default PatchedPriorityRequest;

