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
import WriteFolder from './WriteFolder';

/**
 * The WriteFolderRequest model module.
 * @module model/WriteFolderRequest
 * @version 0.0.0
 */
class WriteFolderRequest {
    /**
     * Constructs a new <code>WriteFolderRequest</code>.
     * @alias module:model/WriteFolderRequest
     * @param name {String} Name of the folder
     */
    constructor(name) { 
        
        WriteFolderRequest.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>WriteFolderRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WriteFolderRequest} obj Optional instance to populate.
     * @return {module:model/WriteFolderRequest} The populated <code>WriteFolderRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WriteFolderRequest();

            if (data.hasOwnProperty('default_permission')) {
                obj['default_permission'] = ApiClient.convertToType(data['default_permission'], 'Number');
            }
            if (data.hasOwnProperty('parent_id')) {
                obj['parent_id'] = ApiClient.convertToType(data['parent_id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('children')) {
                obj['children'] = ApiClient.convertToType(data['children'], [WriteFolder]);
            }
        }
        return obj;
    }


}

/**
 * Permission for a Folder  * `1` - denied * `50` - read_only * `100` - read_write
 * @member {module:model/WriteFolderRequest.DefaultPermissionEnum} default_permission
 */
WriteFolderRequest.prototype['default_permission'] = undefined;

/**
 * @member {Number} parent_id
 */
WriteFolderRequest.prototype['parent_id'] = undefined;

/**
 * Name of the folder
 * @member {String} name
 */
WriteFolderRequest.prototype['name'] = undefined;

/**
 * @member {Array.<module:model/WriteFolder>} children
 */
WriteFolderRequest.prototype['children'] = undefined;





/**
 * Allowed values for the <code>default_permission</code> property.
 * @enum {Number}
 * @readonly
 */
WriteFolderRequest['DefaultPermissionEnum'] = {

    /**
     * value: 1
     * @const
     */
    "1": 1,

    /**
     * value: 50
     * @const
     */
    "50": 50,

    /**
     * value: 100
     * @const
     */
    "100": 100
};



export default WriteFolderRequest;

