

import ApiClient from '../ApiClient';

/**
 * The ResultsetRowData model module.
 * @module model/ResultsetRowData
 * @version 1.0
 */
class ResultsetRowData {
    /**
     * Constructs a new <code>ResultsetRowData</code>.
     * @alias module:model/ResultsetRowData
     */
    constructor() { 
        
        ResultsetRowData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ResultsetRowData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ResultsetRowData} obj Optional instance to populate.
     * @return {module:model/ResultsetRowData} The populated <code>ResultsetRowData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ResultsetRowData();

            if (data.hasOwnProperty('row')) {
                obj['row'] = ApiClient.convertToType(data['row'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<String>} row
 */
ResultsetRowData.prototype['row'] = undefined;






export default ResultsetRowData;

