

import ApiClient from '../ApiClient';

/**
 * The GetEquityType model module.
 * @module model/GetEquityType
 * @version 1.0
 */
class GetEquityType {
    /**
     * Constructs a new <code>GetEquityType</code>.
     * @alias module:model/GetEquityType
     */
    constructor() { 
        
        GetEquityType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetEquityType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetEquityType} obj Optional instance to populate.
     * @return {module:model/GetEquityType} The populated <code>GetEquityType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetEquityType();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetEquityType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetEquityType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetEquityType.prototype['description'] = undefined;






export default GetEquityType;

