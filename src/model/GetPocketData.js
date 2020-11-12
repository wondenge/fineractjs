

import ApiClient from '../ApiClient';

/**
 * The GetPocketData model module.
 * @module model/GetPocketData
 * @version 1.0
 */
class GetPocketData {
    /**
     * Constructs a new <code>GetPocketData</code>.
     * @alias module:model/GetPocketData
     */
    constructor() { 
        
        GetPocketData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetPocketData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetPocketData} obj Optional instance to populate.
     * @return {module:model/GetPocketData} The populated <code>GetPocketData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetPocketData();

            if (data.hasOwnProperty('row')) {
                obj['row'] = ApiClient.convertToType(data['row'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} row
 */
GetPocketData.prototype['row'] = undefined;






export default GetPocketData;

