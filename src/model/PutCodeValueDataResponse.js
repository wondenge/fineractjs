

import ApiClient from '../ApiClient';
import PutCodeValuechangesSwagger from './PutCodeValuechangesSwagger';

/**
 * The PutCodeValueDataResponse model module.
 * @module model/PutCodeValueDataResponse
 * @version 1.0
 */
class PutCodeValueDataResponse {
    /**
     * Constructs a new <code>PutCodeValueDataResponse</code>.
     * PutCodeValueDataResponse
     * @alias module:model/PutCodeValueDataResponse
     */
    constructor() { 
        
        PutCodeValueDataResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutCodeValueDataResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutCodeValueDataResponse} obj Optional instance to populate.
     * @return {module:model/PutCodeValueDataResponse} The populated <code>PutCodeValueDataResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutCodeValueDataResponse();

            if (data.hasOwnProperty('resourceId')) {
                obj['resourceId'] = ApiClient.convertToType(data['resourceId'], 'Number');
            }
            if (data.hasOwnProperty('changes')) {
                obj['changes'] = PutCodeValuechangesSwagger.constructFromObject(data['changes']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} resourceId
 */
PutCodeValueDataResponse.prototype['resourceId'] = undefined;

/**
 * @member {module:model/PutCodeValuechangesSwagger} changes
 */
PutCodeValueDataResponse.prototype['changes'] = undefined;






export default PutCodeValueDataResponse;

