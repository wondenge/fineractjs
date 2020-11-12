

import ApiClient from '../ApiClient';

/**
 * The GetFundsResponse model module.
 * @module model/GetFundsResponse
 * @version 1.0
 */
class GetFundsResponse {
    /**
     * Constructs a new <code>GetFundsResponse</code>.
     * GetFundsResponse
     * @alias module:model/GetFundsResponse
     */
    constructor() { 
        
        GetFundsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetFundsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetFundsResponse} obj Optional instance to populate.
     * @return {module:model/GetFundsResponse} The populated <code>GetFundsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetFundsResponse();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetFundsResponse.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetFundsResponse.prototype['name'] = undefined;






export default GetFundsResponse;

