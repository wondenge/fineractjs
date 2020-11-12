

import ApiClient from '../ApiClient';
import ResultsetColumnHeaderData from './ResultsetColumnHeaderData';

/**
 * The PostDataTablesRequest model module.
 * @module model/PostDataTablesRequest
 * @version 1.0
 */
class PostDataTablesRequest {
    /**
     * Constructs a new <code>PostDataTablesRequest</code>.
     * PostDataTablesRequest
     * @alias module:model/PostDataTablesRequest
     */
    constructor() { 
        
        PostDataTablesRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostDataTablesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostDataTablesRequest} obj Optional instance to populate.
     * @return {module:model/PostDataTablesRequest} The populated <code>PostDataTablesRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostDataTablesRequest();

            if (data.hasOwnProperty('applicationTableName')) {
                obj['applicationTableName'] = ApiClient.convertToType(data['applicationTableName'], 'String');
            }
            if (data.hasOwnProperty('registeredTableName')) {
                obj['registeredTableName'] = ApiClient.convertToType(data['registeredTableName'], 'String');
            }
            if (data.hasOwnProperty('multiRow')) {
                obj['multiRow'] = ApiClient.convertToType(data['multiRow'], 'Boolean');
            }
            if (data.hasOwnProperty('columnHeaderData')) {
                obj['columnHeaderData'] = ApiClient.convertToType(data['columnHeaderData'], [ResultsetColumnHeaderData]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} applicationTableName
 */
PostDataTablesRequest.prototype['applicationTableName'] = undefined;

/**
 * @member {String} registeredTableName
 */
PostDataTablesRequest.prototype['registeredTableName'] = undefined;

/**
 * Allows to create multiple entries in the Data Table. Optional, defaults to false. If this property is not provided Data Table will allow only one entry.
 * @member {Boolean} multiRow
 */
PostDataTablesRequest.prototype['multiRow'] = undefined;

/**
 * @member {Array.<module:model/ResultsetColumnHeaderData>} columnHeaderData
 */
PostDataTablesRequest.prototype['columnHeaderData'] = undefined;






export default PostDataTablesRequest;

