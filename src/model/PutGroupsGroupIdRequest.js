

import ApiClient from '../ApiClient';

/**
 * The PutGroupsGroupIdRequest model module.
 * @module model/PutGroupsGroupIdRequest
 * @version 1.0
 */
class PutGroupsGroupIdRequest {
    /**
     * Constructs a new <code>PutGroupsGroupIdRequest</code>.
     * PutGroupsGroupIdRequest
     * @alias module:model/PutGroupsGroupIdRequest
     */
    constructor() { 
        
        PutGroupsGroupIdRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutGroupsGroupIdRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutGroupsGroupIdRequest} obj Optional instance to populate.
     * @return {module:model/PutGroupsGroupIdRequest} The populated <code>PutGroupsGroupIdRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutGroupsGroupIdRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
PutGroupsGroupIdRequest.prototype['name'] = undefined;






export default PutGroupsGroupIdRequest;

